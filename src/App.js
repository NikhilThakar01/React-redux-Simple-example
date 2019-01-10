import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import store from './store/index';
import { Provider } from 'react-redux';
import InputChange from './inputChange';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
          <InputChange />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
