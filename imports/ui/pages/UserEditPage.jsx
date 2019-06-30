import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Row, Col } from 'antd';
import { Header } from '../components/Header/Header';
import UserEdit from '../components/UserEdit';

import { Users } from '../../collections/users';

class UserEditPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 14, offset: 5 }}>
            <Header />
            <UserEdit user={this.props.user} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('users');
  return {
    user: Users.findOne({ _id: new Mongo.ObjectID(`${props.userId}`) })
  }
})(UserEditPage);
