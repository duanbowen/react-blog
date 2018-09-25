import React, { Component } from 'react';
import avatar from '../../assets/avatar.png'
import { navIcons, bookImgs } from '../../lib/const.js'
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
        <div className="maincontainer-entry-list">
          <div className="maincontainer-list-header">
            <nav>
              <ul>
                <li>热门</li>
                <li>最新</li>
                <li>评论</li>
              </ul>
              <ul>
                <li>本周最热</li>
                <li>本月最热</li>
                <li>历史最热</li>
              </ul>
            </nav>
          </div>
          <ul>
            <li>article items</li>
          </ul>
        </div>
        <aside className="maincontainer-aside">
          <div className="maincontainer-aside-item">
            <div className="header">掘金小册</div>
          </div>
          <div className="maincontainer-aside-item">
            <ul>
              <li><a><img/><span>收藏集</span></a></li>
            </ul>
          </div>
        </aside>
      </main>
    );
  }
}

export default Main;