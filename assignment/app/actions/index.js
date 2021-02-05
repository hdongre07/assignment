import {bindActionCreators} from 'redux';
import {store} from '../store';
import {getMovieRequest, getMovieDetailRequest} from './movie';

const actions = {
  getMovieRequest,
  getMovieDetailRequest,
};

export default bindActionCreators(actions, store.dispatch);
