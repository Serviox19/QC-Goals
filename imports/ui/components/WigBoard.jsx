import React, { Component } from 'react';

export default class WigBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addRow: False
    }
  }

  componentDidMount() {}

  renderNewRow() {
    return (
      <tr>
        <td>{/* Render Dropdown with user categories */}</td>
        <td>{/* Ability to fill in input */}</td>
        <td>{/* Ability to fill in input */}</td>
      </tr>
    );
  }

  render() {
    //render two tables one for previous week and one for this week
    return (
      <React.Fragment>
        <PreviousWig></PreviousWig>
        <NewCommitments></NewCommitments>
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
            { this.renderNewRow() }
          </tbody>
          <button onClick={this.renderNewRow()}>Add Row</button>
        </table>
      </React.Fragment>
    )
  }
}
