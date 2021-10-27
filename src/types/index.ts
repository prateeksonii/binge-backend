export type Movies = {
  page: number;
  results: BannerResponse[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type BannerResponse = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: Genre[];
};
