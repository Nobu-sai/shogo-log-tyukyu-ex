import React, { Component } from 'react'

// import Header from '../../blocks/Header/Header';
import Header from '../../blocks/Header/Header';
import HomeTopMainpicture from './HomeTop/__MainPicture/HomeTop__MainPicture';
import HomeTopMessages from './HomeTop/__Messages/HomeTop__Messages';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeRecommended from './HomeRecommended/HomeRecommended';
import HomeNews from './HomeNews/HomeNews';
import HomeAccess from './HomeAccess/HomeAccess';
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
        {/* <Header /> */}
        <Header />        
        <HomeTopMainpicture />
        <HomeTopMessages />
        <HomeFeatures />
        <HomeRecommended />
        <HomeNews />
        <HomeAccess />
        <Footer />
      </div>        
    )
  }
}
