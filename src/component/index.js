import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestPng from '../assets/test.png';
import store from '../store/example';
import './style.css';

class Example extends Component {
  defaultProps = {
    title: "1"
  }
  constructor(props, context) {
    super(props, context);
    // this.onChange = this.onChange.bind(this)
  }
  onChange = (e) => { // @babel/plugin-proposal-class-properties
    this.props.dispatch({
      type: 'updateTitle',
      payload: {
        title: e.target.value
      }
    })
  }
  render() {
    return (
      <div>
        example react component by cooper1
        <img src={TestPng} alt="test"></img>
        <input
          value={this.props.title}
          onChange={this.onChange}
        />
        <button>update</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return state;
}
Example.defaultProps = {
  title: 'blue' // input 不受控组件
};
export default connect(mapStateToProps)(Example);