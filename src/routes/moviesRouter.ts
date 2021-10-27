import { Router } from 'express';
import { getBannerMovie, getPopularMovies } from '../controllers/moviesController';

const router = Router();

router.get('/popular', getPopularMovies);
router.get('/banner', getBannerMovie);

export default router;
