import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import runRootSaga from './app/sagas';
import AppWrapper from './app/index';

runRootSaga();

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    );
  }
}
