import React, { Component } from 'react'

import HomeTopMainpicture from './HomeTop/__MainPicture/HomeTop__MainPicture';
import HomeTopMessages from './HomeTop/__Messages/HomeTop__Messages';

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
        <HomeTopMessages />
      </div>        
    )
  }
}
