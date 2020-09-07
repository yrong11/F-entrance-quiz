import React, { Component } from 'react';
import {message, List } from 'antd';
import People from './People'
import {getPeopleList} from '../util/http/actions'

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
    }
  }
  
  componentDidMount(){
    this.getPeoples()
    console.log(this.state.peoples)
  }

  getPeoples = async () =>{
    try {
      const response = await getPeopleList()
      if(response.status !== 200) {
        message.error("获取学员列表失败！")
      }
      this.setState({
        peoples: response.data
      })
    }catch (e) {
      message.error('error')
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
               />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default PeopleList;
