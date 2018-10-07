import React, { Component } from 'react';
import ArticleItem from '../article-item';
import style from './style.less';
class Main extends Component {
  render() {
    return (
      <main className={style['main']}>
        <ArticleItem />
      </main>
    );
  }
}

export default Main;