import React, { Component } from 'react';
import Starship from './Starship';

class Starships extends Component {
  render() {
    const shipsList = this.props.ships.map((ship, i) => <Starship {...ship} key={i} /> )
    return(
      <table>
        <thead>
          <tr>
            <td>Starship</td>
            <td>Class</td>
            <td>Length</td>
            <td>Crew</td>
          </tr>
        </thead>
        <tbody>
          {shipsList}
        </tbody>
      </table>
    )
  }
}

export default Starships;
