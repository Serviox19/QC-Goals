import React, { Component } from 'react';
import { Header } from '../components/Header/Header';
import WigBoard from '../components/WigBoard';

export default class WigPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <WigBoard />
      </div>
    );
  }
}
