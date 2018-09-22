import React, { Component } from 'react';
import TopHeader from './topHeader';
import SecondHeader from './secondHeader';
class Header extends Component {
  state = {
    value: ''
  }
  onSearch = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <header>
        <TopHeader/>
        <SecondHeader />
      </header>
    );
  }
}

export default Header;