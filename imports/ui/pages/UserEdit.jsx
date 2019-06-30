import React, { Component } from 'react';

export default class UserEditPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h2>Edit page for user `${this.props.userId}` </h2>
      </React.Fragment>
    )
  }
}
