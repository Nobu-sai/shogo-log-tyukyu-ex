import React, { Component } from 'react'

import HomeTopMainpicture from '../HomeTop/__MainPicture/HomeTop__MainPicture';
import HomeTopMessages from '../HomeTop/__Messages/HomeTop__Messages';

export default class Hometop extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {
    
  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {
    return (
      <div className="home-top">
        <div className="home-top__main-picture-container">
          <HomeTopMainpicture />
        </div>
        <div className="home-top__messages-container">
          <HomeTopMessages />
        </div>

      </div>
    )
  }
}
