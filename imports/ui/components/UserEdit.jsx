import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

import { Users } from '../../collections/users';

export default class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userTitle: '',
      avatarBg: '',
      avatarFont: ''
    }

    this.handleUserName = this.handleUserName.bind(this);
    this.handleUserTitle = this.handleUserTitle.bind(this);
    this.handleAvatarBg = this.handleAvatarBg.bind(this);
    this.handleAvatarFont = this.handleAvatarFont.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  handleUserName(event) {
    this.setState({
      userName: event.target.value
    })
    console.log(this.state.userName);
  }

  handleUserTitle(event) {
    this.setState({
      userTitle: event.target.value
    })
    console.log(this.state.userTitle);
  }

  handleAvatarBg(event) {
    this.setState({
      avatarBg: event.target.value
    })
    console.log(this.state.avatarBg);
  }

  handleAvatarFont(event) {
    this.setState({
      avatarFont: event.target.value
    })
    console.log(this.state.avatarFont);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('hit');
    // console.log( Users.update({}) );
  }

  render() {
    return (
      <React.Fragment>
        <a href="/">Home</a>
        <Row>
          <h2>{this.props.user.name}</h2>
          <h2>{this.props.user.title}</h2>

          <Row>
            <Col
            xs={{ span: 16 }}
            sm={{ span: 8 }}
            md={{ span: 12 }}
            lg={{ span: 14 }}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleUserName}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Title"
                    type="text"
                    value={this.state.userTitle}
                    onChange={this.handleUserTitle}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="bg-colors" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Avatar BG Color"
                    type="text"
                    value={this.state.avatarBg}
                    onChange={this.handleAvatarBg}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="font-colors" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Avatar Font Color"
                    type="text"
                    value={this.state.avatarFont}
                    onChange={this.handleAvatarFont}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Edit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Row>
      </React.Fragment>
    );
  }
}
