import { Request, RequestHandler } from 'express';
import tmdb from '../services/tmdb';
import { MovieDetailRequest } from '../types';

export const getPopularMovies: RequestHandler = async (req, res, next) => {
  try {
    const { page = 1 }: { page?: number } = req.query;
    const movies = await tmdb.getPopularMovies(page);

    res.json({
      ok: true,
      movies,
    });
  } catch (err) {
    return next(err);
  }
};

export const getBannerMovie: RequestHandler = async (req, res, next) => {
  try {
    const { page = 1 }: { page?: number } = req.query;
    const banner = await tmdb.getBannerMovie(page);

    res.json({
      ok: true,
      banner,
    });
  } catch (err) {
    return next(err);
  }
};

export const getMovieDetail: RequestHandler<MovieDetailRequest> = async (
  req: Request<MovieDetailRequest>,
  res,
  next,
) => {
  try {
    const { movieId } = req.params;
    const movie = await tmdb.getMovieDetail(movieId);

    res.json({
      ok: true,
      movie,
    });
  } catch (err) {
    return next(err);
  }
};
