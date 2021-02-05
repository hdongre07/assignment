import React, {Component} from 'react';
import Navigator from './navigator';

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.search = 'Query';
    this.state = {};
  }

  render() {
    return <Navigator />;
  }
}

export default AppWrapper;
