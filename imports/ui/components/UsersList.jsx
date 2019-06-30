import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { withTracker } from 'meteor/react-meteor-data';

import { Users } from '../../collections/users';

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <React.Fragment>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={this.props.users}
          renderItem={item => (
            <List.Item
              actions={[<a href={"/user/" + item._id}>Edit</a>, <a href={"/wigs/" + item._id}>Wigs</a>]} key={item._id}>
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

export default withTracker((props) => {
  Meteor.subscribe('users');
  return {
    users: Users.find({}).fetch()
  }
})(UsersList);
