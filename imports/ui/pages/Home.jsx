import React, { Component } from 'react';
import { Header } from '../components/Header';
import UsersList from '../components/UsersList';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <UsersList />
      </div>
    );
  }
}
