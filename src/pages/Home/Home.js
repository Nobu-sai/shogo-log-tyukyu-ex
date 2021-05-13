import React, { Component } from 'react'

import HomeTopMainpicture from './HomeTop/__MainPicture/HomeTop__MainPicture';
import HomeTopMessages from './HomeTop/__Messages/HomeTop__Messages';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeRecommended from './HomeRecommended/HomeRecommended';
import HomeNews from './HomeNews/HomeNews';
import Footer from '../../blocks/Footer/Footer';

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
        <HomeFeatures />
        <HomeRecommended />
        <HomeNews />
        <Footer />
      </div>        
    )
  }
}
