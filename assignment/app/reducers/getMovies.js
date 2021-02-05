/* eslint no-underscore-dangle: 0 */

import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_DETAIL_REQUEST,
  GET_MOVIES_DETAIL_SUCCESS,
  GET_MOVIES_DETAIL_FAILURE,
} from '../actions/movie';

const initialState = {
  isLoading: false,
  getMoviesResponse: {},
  totalPage: 1,
  nextPage: 1,
  list: [],
  getMovieDetailResponse: {},
};

function getMovies(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        getMoviesResponse: {},
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getMoviesResponse: action.data,
        totalPage: action.totalPage,
        nextPage: action.nextPage,
        list:
          state.nextPage === 1
            ? action.data.Search
            : [...state.list, ...action.data.Search],
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_MOVIES_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        getMovieDetailResponse: {},
      };
    case GET_MOVIES_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        getMovieDetailResponse: action.data,
      };
    case GET_MOVIES_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default getMovies;
