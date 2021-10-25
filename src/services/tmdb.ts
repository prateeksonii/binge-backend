import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

type Movies = {
  page: number;
  results: object[];
};

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

  console.log(response);

  return response.data.results;
};

export default {
  getPopularMovies,
};
