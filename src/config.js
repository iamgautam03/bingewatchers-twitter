const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b5ee15bb5d66e719b44e5b0db2c4e965';

const TRENDING_BASE_URL = `${API_URL}trending/movie/day?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  TRENDING_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
