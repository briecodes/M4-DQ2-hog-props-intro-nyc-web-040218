import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ...Offspring
    }
  }

  render() {
    console.log(this.state.offspring)
    return (
      <div className="App">
        < MasterHog offspring={this.state.offspring} />
      </div>
    )
  }

}

export default App
