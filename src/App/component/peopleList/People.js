import React, { Component } from 'react';
import './people.scss'

class People extends Component {
  render() {
    const {item} = this.props
    return (
      <div className="people-info">
         {item.id}.
         {item.name} 
      </div>
    );
  }
}

export default People;
