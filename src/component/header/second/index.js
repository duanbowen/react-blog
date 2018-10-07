import React, { Component } from 'react';
import style from './style.less';

class SecondHeader extends Component {
  render() {
    return (
      <nav className="container">
        <ul>
          <li className="active">我关注的</li>
          <li>web前端</li>
          <li>NodeJS</li>
          <li>简历</li>
        </ul>
      </nav>
    );
  }
}

export default SecondHeader;