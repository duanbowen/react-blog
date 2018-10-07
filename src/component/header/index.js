import React, { Component } from 'react';
import Main from './main';
import Second from './second';
import './style.less';

let originScrollTop = 0;
let timer = '';
let TopHeaderDom = '';
class Header extends Component {
  componentDidMount = () => {
    TopHeaderDom = document.getElementById('top-header');

    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll');
  }
  onScroll = () => {
    if (TopHeaderDom.getAttribute('class') === 'hidden') {
      if (originScrollTop - window.scrollY > 30) {
        TopHeaderDom.classList.remove('hidden')
      }
    } else if (window.scrollY - originScrollTop > 60 && window.scrollY > 120) {
      TopHeaderDom.classList.add('hidden');
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      originScrollTop = window.scrollY;
      clearTimeout(timer);
    }, 100);
  }
  render() {
    return (
      <header id="top-header">
        <Main><span>test</span><span>test</span></Main>
        <div className="divider" />
        <Second />
      </header>
    );
  }
}

export default Header;