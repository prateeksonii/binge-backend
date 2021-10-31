import { Router } from 'express';
import {
  getBannerMovie,
  getMovieDetail,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../controllers/moviesController';

const router = Router();

router.get('/popular', getPopularMovies);
router.get('/top_rated', getTopRatedMovies);
router.get('/upcoming', getUpcomingMovies);
router.get('/now_playing', getNowPlayingMovies);
router.get('/banner', getBannerMovie);
router.get('/:movieId', getMovieDetail);

export default router;
