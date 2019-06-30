import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Header } from '../components/Header/Header';
import UsersList from '../components/UsersList';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 14, offset: 5 }}>
          <div id="main-wrapper">
            <Header />
            <h1 style={{ textAlign: 'center' }}>Wildly Important Goals</h1>
            <UsersList />
          </div>
        </Col>
      </Row>

    );
  }
}
