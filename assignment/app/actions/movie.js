export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export const GET_MOVIES_DETAIL_REQUEST = 'GET_MOVIES_DETAIL_REQUEST';
export const GET_MOVIES_DETAIL_SUCCESS = 'GET_MOVIES_DETAIL_SUCCESS';
export const GET_MOVIES_DETAIL_FAILURE = 'GET_MOVIES_DETAIL_FAILURE';

export const getMovieRequest = (query, page) => ({
  type: GET_MOVIES_REQUEST,
  query,
  page,
});

export const getMovieSuccess = (response, totalPage, nextPage) => ({
  type: GET_MOVIES_SUCCESS,
  data: response,
  totalPage,
  nextPage,
});

export const getMovieFailed = () => ({
  type: GET_MOVIES_FAILURE,
});

export const getMovieDetailRequest = (id) => ({
  type: GET_MOVIES_DETAIL_REQUEST,
  id,
});

export const getMovieDetailSuccess = (response) => ({
  type: GET_MOVIES_DETAIL_SUCCESS,
  data: response,
});

export const getMovieDetailFailed = () => ({
  type: GET_MOVIES_DETAIL_FAILURE,
});
