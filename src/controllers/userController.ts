import { RequestHandler } from 'express';
import argon2 from 'argon2';
import User from '../models/User';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, password }: { name: string; email: string; password: string } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409);
      throw new Error('User already exists');
    }

    const hashedPassword = await argon2.hash(password, { saltLength: 12 });

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    user.password = undefined;

    return res.status(201).json({
      ok: true,
      user,
    });
  } catch (err) {
    return next(err);
  }
};
