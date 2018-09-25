import React, { Component, Fragment } from 'react';
import Header from '../component/header';
import Main from '../component/main';
class WebAppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <Main />
      </Fragment>
    );
  }
}

export default WebAppRoute;