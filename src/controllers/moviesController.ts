import { RequestHandler } from 'express';
import tmdb from '../services/tmdb';

export const getPopularMovies: RequestHandler = async (req, res, next) => {
  try {
    const movies = await tmdb.getPopularMovies(1);

    res.json({
      ok: true,
      movies,
    });
  } catch (err) {
    return next(err);
  }
};
