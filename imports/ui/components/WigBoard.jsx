import React, { Component } from 'react';

export default class WigBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    //render two tables one for previous week and one for this week
    return (
      <table>
        <thead>
          <tr>
            <td>Category</td>
            <td>Goals</td>
            <td>Status</td>
            <td>Problems/Comments</td>
          </tr>
        </thead>
        <tbody>
          //loop rows with add button
          <tr></tr>
        </tbody>
      </table>
    )
  }
}
