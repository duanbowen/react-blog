import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebApp from './route';
import ReducerExample from './model/example';
import './global.less';
render(<Provider store={createStore(ReducerExample)}>
  <WebApp />
</Provider>, document.querySelector('#root'));


