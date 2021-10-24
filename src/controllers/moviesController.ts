import { RequestHandler } from 'express';

export const getPopularMovies: RequestHandler = (req, res) => {
  res.json({
    ok: true,
  });
};
