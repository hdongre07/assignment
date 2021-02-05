import {getBaseUrl} from '../config/appConfig';

export const getMoviesURL = (query, page) =>
  `${getBaseUrl()}?apikey=b9bd48a6&s={${query}}&page=${page}`;

export const getMovieDetailURL = (id) =>
  `${getBaseUrl()}?apikey=b9bd48a6&i=${id}`;
