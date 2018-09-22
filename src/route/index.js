import React, { Component, Fragment } from 'react';
import ArticleItem from '../component/article-item';
import Header from '../component/header';
import Main from '../component/main';
class WebAppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <ArticleItem />
        <Header />
        <Main />
      </Fragment>
    );
  }
}

export default WebAppRoute;