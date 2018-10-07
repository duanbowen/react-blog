import React, { Component } from 'react';
import Article from '../article-item';
import style from './style.less';
class Main extends Component {
  render() {
    return (
      <main className={style['main']}>
        <Article />
      </main>
    );
  }
}

export default Main;