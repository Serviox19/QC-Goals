import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button } from 'antd';

import { Users } from '../../collections/users';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalForms extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleUserEdit = this.handleUserEdit.bind(this);
  }

  componentDidMount() {
    this.props.form.validateFields();
    console.log(this.props.user);
  }

  handleUserEdit() {

  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

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
            <Form layout="inline" onSubmit={this.handleUserEdit}>
              <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Input Username to Edit' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Update</Button>
              </Form.Item>
            </Form>
            </Col>
          </Row>
        </Row>
      </React.Fragment>
    );
  }
}

export default UserEdit = Form.create({ name: 'horizontal_login' })(HorizontalForms);
