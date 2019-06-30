import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Users } from '../../collections/users';

class UserEditPage extends Component {
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
        <a href="/">Home</a>
        <h2>Edit page for user {this.props.userId} </h2>
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.user.title}</h2>
      </React.Fragment>
    )
  }
}

export default withTracker((props) => {
  console.log(props);
  Meteor.subscribe('users');
  return {
    user: Users.findOne({_id: new Mongo.ObjectID(`${props.userId}`) })
  }
})(UserEditPage);
