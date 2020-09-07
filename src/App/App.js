import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import PeopleList from './component/peopleList/PeopleList'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <PeopleList />

      </div>
    );
  }
}

export default App;
