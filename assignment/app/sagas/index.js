import {fork} from 'redux-saga/effects';
import {sagaMiddleware} from '../store';
import getMoviesSaga from './Movie/getMoviesSaga';

function* root() {
  yield fork(getMoviesSaga);
}

const run = () => sagaMiddleware.run(root);

export default run;
