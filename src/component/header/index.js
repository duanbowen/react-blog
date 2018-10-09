import React, { Component } from 'react';
import Main from './main';
import Second from './second';
import './style.less';

let lastScrollTop = 0;
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
    if (window.scrollY < 100) {
      TopHeaderDom.classList.remove('hidden')
    } else {
      if (lastScrollTop - window.scrollY > 30) {
        TopHeaderDom.classList.remove('hidden')
      } else {
        TopHeaderDom.classList.add('hidden');
      }
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      lastScrollTop = window.scrollY;
      clearTimeout(timer);
    }, 100);
  }
  render() {
    return (
      <header id="top-header">
        <Main />
        <div className="divider" />
        <Second />
      </header>
    );
  }
}

export default Header;