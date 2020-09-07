import React, { Component } from 'react';
import {message, List } from 'antd';
import People from './People'
import {getPeopleList, addPeople} from '../util/http/actions'

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
    }
  }
  
  componentDidMount(){
    this.getPeoples()
  }

  getPeoples = async () =>{
    try {
      const response = await getPeopleList()
      if(response.status !== 200) {
        message.error("获取学员列表失败！")
      }
      const peopleData = response.data
      peopleData.push({'id': -1})
      this.setState({
        peoples: peopleData
      })
    }catch (e) {
      message.error('error')
    }
  }

  addPeople = async(e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      await addPeople(e.target.value)
    }
    
  }

  render() {
    return (
      <div className="people-list">
        <h2>学员列表</h2>
        <List
          grid={{ gutter: 16, column: 8 }}
          dataSource={this.state.peoples}
          renderItem={item => (
            <List.Item>
              <People
                key={item.id}
                item={item}
                // eslint-disable-next-line react/jsx-no-bind
                addPeople={this.addPeople.bind(this)}
               />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default PeopleList;
