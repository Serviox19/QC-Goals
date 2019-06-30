import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

class UserEdit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

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
                    placeholder="name"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Title"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="bg-colors" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Avatar BG Color"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="font-colors" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Avatar Font Color"
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

export default UserEdit;
