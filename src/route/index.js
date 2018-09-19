import React, { Component, Fragment } from 'react';
import Header from '../component/header'; 
import ArticleItem from '../component/article-item';
class WebAppRoute extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <ArticleItem />
      </Fragment>
    );
  }
}

export default WebAppRoute;