import React, { Component } from 'react';

class Starship extends Component {
  render(){
    const { 
      name, 
      starship_class, 
      crew, 
      length 
      } = this.props
    const crewDisplay = crew.toLocaleString('en-GB')
    const lengthDisplay = isNaN(length) ? length.toLocaleString('en-GB') : length.toLocaleString('en-GB') + "m" 
    return (
        <tr>
          <td className='ship__name'><h4>{name}</h4></td>
          <td className='ship__class'>{starship_class}</td>
          <td className='ship__length'>{lengthDisplay}</td>
          <td className='ship__crew'><span role='img' aria-label='crew'>👤</span> {crewDisplay}</td>
        </tr>
    )
  }
}

export default Starship;
