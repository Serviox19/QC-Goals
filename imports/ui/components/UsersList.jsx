import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

export default class UsersList extends Component {
  constructor(props) {
    super(props)
  }

  users() {
    return [
      {"id": 1, "name": "Servio", "title": "Web Developer", "avatar_color": ""},
      {"id": 2, "name": "Katia", "title": "Copywriting Strategist", "avatar_color": ""},
      {"id": 3, "name": "Naiomy", "title": "Graphic Designer", "avatar_color": ""},
      {"id": 4, "name": "Joe", "title": "Copywriter", "avatar_color": ""}
    ]
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={this.users()}
          renderItem={item => (
            <List.Item actions={[<a href="#">Edit</a>, <a href="#">Wigs</a>]} key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {item.name.charAt(0)}
                  </Avatar>}
                title={item.name}
                description={item.title}
              />
            </List.Item>
          )}
        />
      </React.Fragment>
    )
  }

}
