import React, { Component } from 'react';

class PeopleGroup extends Component {
  render() {
    const {item, groupName} = this.props
    console.log(item)
    console.log(groupName)
    return (
    <div className='group-info'>
      <input onKeyUp={this.props.editGroupName} className="group-name" 
          type='text' value={groupName} />
      {item.forEach((itm) => {return(<div>{`${itm.id}.${itm.name}`}</div>)} )}
    </div>
    );
  }
}

export default PeopleGroup;
