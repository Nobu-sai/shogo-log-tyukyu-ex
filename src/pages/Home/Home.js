import React, { Component } from 'react'

import HomeTopMainpicture from './HomeTop/__MainPicture/HomeTop__MainPicture';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  
  }

  render() {
    return (
      <div className="home">
        <HomeTopMainpicture />
      </div>        
    )
  }
}
