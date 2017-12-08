import React, { Component } from 'react';

import Starships from './components/Starships';
import ErrorMsg from './components/ErrorMsg';
import Loading from './components/Loading';

import orderBy from 'lodash/orderBy';

class App extends Component {

  constructor(props){
    super(props)
    this.fetchData = this.fetchData.bind(this)
    this.updateShipsList = this.updateShipsList.bind(this)
    this.parseRecord = this.parseRecord.bind(this)
    this.state = {
      requestFailed: false,
      isLoading: true,
      sortProperty: 'length',
      sortOrder: 'desc',
      resultPage: 1,
      ships: []
    }
  }
  
  componentDidMount(){
    this.fetchData('https://swapi.co/api/starships?page=1')
  }

  fetchData(URL){
    fetch(URL)
    .then(res => {
      if(!res.ok) { throw Error("Network request failed") }
      return res
    })
    .then(res => res.json())
    .then(res => {
        this.updateShipsList(res.results, this.state.sortProperty, this.state.sortOrder)
        this.setState( {isLoading: false} )
      }, () => {
        this.setState({
          requestFailed: true,
          isLoading: false
        })
      })
  }

  parseRecord(record){
		let resultNum = parseInt(record, 10);
    return isNaN(resultNum) ? "Unknown" : resultNum
  }

  updateShipsList(data, sortProperty, sortOrder){
    data.map(ship => { 
      return(
        ship.length = this.parseRecord(ship.length), 
        ship.crew = this.parseRecord(ship.length)
        )})
    
    orderBy(data, sortProperty, sortOrder)
    .map(ship => this.setState(prevState => ({
      ships: [...prevState.ships, ship]
      })))
  } 

  render(){
    if(this.state.requestFailed) return <ErrorMsg msg="Network request failed" />
    if(this.state.isLoading) return <Loading />
    return (
      <Starships ships={this.state.ships} />
    )
  }
}

export default App;
