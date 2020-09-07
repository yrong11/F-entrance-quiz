import React, { Component } from 'react';

class PeopleGroup extends Component {
  render() {
    const {item, groupName} = this.props
    return (
    <div>
      <input onKeyUp={this.props.editGroupName} className="add-people-input" 
          type='text' value={groupName} />
      {item.forEach((itm) => {return(<div>{`${itm.id}.${itm.name}`}</div>)} )}
    </div>
    );
  }
}

export default PeopleGroup;
