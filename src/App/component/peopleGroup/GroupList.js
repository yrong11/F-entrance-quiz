import React, { Component } from 'react';
import { message } from 'antd';
import { getGroupList, modifyGroupName } from '../util/http/actions'
import PeopleGroup from './PeopleGroup'
import './group.scss'

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
    }
  }

  componentDidMount() {
  }

  modifyName = async() => {
  }

  getGroupPeoples = async () => {
    try {
      const response = await getGroupList()
      if (response.status !== 200) {
        message.error("获取学员分组列表失败！")
      }
      this.setState({
        groupList: response.data
      })
    } catch (e) {
      message.error('获取学员分组列表失败')
    }
  }


  render() {
    const data = this.state.groupList
    console.log(data)
    console.log(data['Team 2'])
    return (

      <div className="group-list">
        <div className="group-header">
          <h2>分组列表</h2>
          <button type='button' onClick={this.getGroupPeoples} >分组学员</button>
        </div>
        
        {Object.keys(data).map((key) =>
        <PeopleGroup key={key} gropName={key} item={data[key]} />
        )}
      </div>
    );
  }
}

export default GroupList;
