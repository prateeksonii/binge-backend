import axios from 'axios';
import { Movie, Genres, Movies, MovieDetail } from '../types';

const baseURL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL,
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

const getPopularMovies = async (page: number) => {
  const response = await tmdbApi.get<Movies>('/movie/popular', {
    params: {
      page,
    },
  });

  return response.data.results;
};

const getBannerMovie = async (page: number) => {
  const response = await tmdbApi.get<Movies>('/movie/popular', {
    params: {
      page,
    },
  });

  const banner: Movie = response.data.results[0];
  const genresResponse = await tmdbApi.get<Genres>('/genre/movie/list');

  const genres = genresResponse.data.genres.filter((genre) => banner.genre_ids.includes(genre.id));

  banner.genres = genres;

  return banner;
};

const getMovieDetail = async (movieId: number) => {
  const response = await tmdbApi.get<MovieDetail>(`/movie/${movieId}`);

  return response.data;
};

export default {
  getPopularMovies,
  getBannerMovie,
  getMovieDetail,
};
