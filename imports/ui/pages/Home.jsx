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
        <Col span={14} offset={5}>
          <div id="main-wrapper">
            <Header />
            <UsersList />
          </div>
        </Col>
      </Row>

    );
  }
}
