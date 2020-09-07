import React, { Component } from 'react';
import './people.scss'

class People extends Component {
  render() {
    const { item } = this.props
    return (
      item.id !== -1 ?
        <div className="people-info">
          {`${item.id}.${item.name}`}
        </div> : 
        <div className='add-people'>
          <input onKeyUp={this.props.addPeople} className="add-people-input" 
          type='text' placeholder="+添加学员" />
        </div>
    );
  }
}

export default People;
