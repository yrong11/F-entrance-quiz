import React, { Component } from 'react';
import { List } from 'antd';

import People from '../peopleList/People'

class PeopleGroup extends Component {
  render() {
    const { item, groupName } = this.props

    const elements = []
    item.forEach((itm) => {
      elements.push(<People key={itm.id} item={itm} />)
    })
    return (
      <div className='group-info'>
        <input onKeyUp={this.props.editGroupName} className="group-name"
          type='text' value={groupName} />
          <div className="group-people">
          <List
          grid={{ gutter: 16, column: 7 }}
          dataSource={item}
          renderItem={itm => (
            <List.Item>
              <People
                key={itm.id}
                item={itm}
              />
            </List.Item>
          )}
        />
          </div>
        
      </div>
    );
  }
}

export default PeopleGroup;
