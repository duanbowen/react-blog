import React, { Component } from 'react';
import avatar from '../../assets/avatar.png'
import { navIcons } from '../../lib/const.js'
import './style.less'
class Main extends Component {
  render() {
    return (
      <main className="main-container">
        <nav className="maincontainer-nav">
          <ul className="maincontainer-nav-left">
            <div className="maincontainer-nav-avatar"><img src={avatar} className="maincontainer-nav-avatar"/></div>
            <li className="maintainer-nav-item">
              <img src={navIcons[0]}/>
              <a>发沸点</a>
            </li>
            <li className="maintainer-nav-item">
              <img src={navIcons[1]}/>
              <a>写文章</a>
            </li>
            <li className="maintainer-nav-item">
              <img src={navIcons[2]}/>
              <a>分享链接</a>
            </li>
          </ul>
          <div className="maincontainer-nav-draft">草稿</div>
        </nav>
        <div className="maincontainer-header">main header</div>
        <div>articles</div>
      </main>
    );
  }
}

export default Main;