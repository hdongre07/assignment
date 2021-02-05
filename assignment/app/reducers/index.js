import {combineReducers} from 'redux';
import getMovies from './getMovies';

const appReducer = combineReducers({
  getMovies,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
