import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import PeopleList from './component/peopleList/PeopleList'
import GroupList from './component/peopleGroup/GroupList'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <PeopleList />

      </div>
    );
  }
}

export default App;
