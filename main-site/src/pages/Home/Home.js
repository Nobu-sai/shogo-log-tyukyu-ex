import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { ReactDOM } from 'react-dom';

// import Header from '../../blocks/Header/Header';
import StructuredDataBreadcrumbList from '../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList';
import Header from '../../blocks/Header/Header';
import HomeTopMainpicture from './HomeTop/__MainPicture/HomeTop__MainPicture';
import HomeTopMessages from './HomeTop/__Messages/HomeTop__Messages';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeRecommended from './HomeRecommended/HomeRecommended';
import HomeNews from './HomeNews/HomeNews';
import HomeAccess from './HomeAccess/HomeAccess';
import Footer from '../../blocks/Footer/Footer';
import ReservationModal from '../../blocks/ReservationModal/ReservationModal';

let breadcrumbListItems;

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
        reservationModalIsOpen: false,
          
      }
      this.toggleReservationModal = this.toggleReservationModal.bind(this);      
    }

  toggleReservationModal() {
    console.log()
    this.setState({
      reservationModalIsOpen: !this.state.reservationModalIsOpen, 
    })
  }


  render() { 

    breadcrumbListItems = 
      [
        {
            url:`${window.location}`, 
            name:"Top",
        },
      ]

    return (
      <div className="home" ref={home => this.home = home}>

        <Helmet>          
          <title>石井花壇 | 温海温泉旅館【公式サイト】 </title>
        </Helmet>
        <StructuredDataBreadcrumbList 
          breadcrumbListItems={breadcrumbListItems}
        />
        
        <Header 
          toggleReservationModal={this.toggleReservationModal}
        />        
        <HomeTopMainpicture />
        <HomeTopMessages />
        <HomeFeatures />
        <HomeRecommended />
        <HomeNews />
        <HomeAccess />
        <Footer />
        {
          this.state.reservationModalIsOpen && 
            <ReservationModal 
              reservationModalIsOpen={this.state.reservationModalIsOpen} 
              toggleReservationModal={this.toggleReservationModal}
            />
        }
      </div>        
    )
  }
}

// ReactDOM.render(    
//   <StructuredDataBreadcrumbList 
//     breadcrumbListItems={breadcrumbListItems}
//   />
//   , document.etElementsByTagName('body'));