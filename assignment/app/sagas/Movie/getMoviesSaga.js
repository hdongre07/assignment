import {call, takeLatest, put, all} from 'redux-saga/effects';
import {
  METHOD_TYPE,
  // isSuccessAPI,
  parsedAPIResponse,
  // showErrorMessage,
  // showExceptionErrorMessage,
} from '../APIHandler';
import {Alert} from 'react-native';
import {apiCall} from '../../api/apiInterface';
import {getMoviesURL, getMovieDetailURL} from '../../api/urls';

import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_DETAIL_REQUEST, getMovieDetailSuccess, getMovieDetailFailed,
  getMovieSuccess,
  getMovieFailed,
  getMovieDetailRequest,
} from '../../actions/movie';

function* getMovies(action) {
  const url = getMoviesURL(action.query, action.page);
  console.log('Get movies:: url', url);
  try {
    // yield put(showLoader());
    const response = yield call(apiCall, url, METHOD_TYPE.GET);

    // yield put(hideLoader());
    const parsedResponse = yield call(parsedAPIResponse, response);
    if (parsedResponse.Response === 'True') {
      let resObj = {};
      resObj = parsedResponse;
      // console.log('Response success::', resObj);
      const totalPage = Math.ceil(resObj.totalResults / 10);
      const nextPage = totalPage > action.page ? action.page + 1 : action.page;
      console.log('Pages::', totalPage, nextPage);
      yield put(getMovieSuccess(resObj, totalPage, nextPage));
    } else {
      // showErrorMessage(response, parsedResponse);
      yield put(getMovieFailed(parsedResponse));
    }
  } catch (error) {
    // showExceptionErrorMessage();
    Alert.alert(
      '',
      'message',
      [
        { text: 'Exception' },
      ],
      { cancelable: false }
    );
    console.log('Response Exception::', error);
    yield put(getMovieFailed());
  }
}

function* getMovieDetail(action) {
  const url = getMovieDetailURL(action.id);
  console.log('Get movies:: url', url);
  try {
    // yield put(showLoader());
    const response = yield call(apiCall, url, METHOD_TYPE.GET);

    // yield put(hideLoader());
    const parsedResponse = yield call(parsedAPIResponse, response);
    if (parsedResponse.Response === 'True') {
      let resObj = {};
      resObj = parsedResponse;
      console.log('Success::', resObj)
      yield put(getMovieDetailSuccess(resObj));
    } else {
      // showErrorMessage(response, parsedResponse);
      yield put(getMovieDetailFailed(parsedResponse));
    }
  } catch (error) {
    // showExceptionErrorMessage();
    Alert.alert(
      '',
      'message',
      [
        { text: 'Exception' },
      ],
      { cancelable: false }
    );
    console.log('Response Exception::', error);
    yield put(getMovieDetailFailed());
  }
}

export default function* getMoviesSaga() {
  yield all([takeLatest(GET_MOVIES_REQUEST, getMovies)]);
  yield all([takeLatest(GET_MOVIES_DETAIL_REQUEST, getMovieDetail)]);
}
