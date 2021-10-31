import { Router } from 'express';
import { getBannerMovie, getMovieDetail, getPopularMovies } from '../controllers/moviesController';

const router = Router();

router.get('/popular', getPopularMovies);
router.get('/banner', getBannerMovie);
router.get('/:movieId', getMovieDetail);

export default router;
