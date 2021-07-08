import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { ReactDOM } from 'react-dom';

// import Header from '../../blocks/Header/Header';
import StructuredDataBreadcrumbList from '../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList';
import Header from '../../blocks/Header/Header';
import HomeTop from './HomeTop/HomeTop';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeRecommended from './HomeRecommended/HomeRecommended';
import HomeNews from './HomeNews/HomeNews';
import HomeAccess from './HomeAccess/HomeAccess';
import Footer from '../../blocks/Footer/Footer';
import ReservationModal from '../../blocks/ReservationModal/ReservationModal';

export default class Home extends Component {
  constructor(props) {
      super(props)

      this.state = {
        reservationModalIsOpen: false,
          
      }
      this.toggleReservationModal = this.toggleReservationModal.bind(this);      
    }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleReservationModal() {
    console.log()
    this.setState({
      reservationModalIsOpen: !this.state.reservationModalIsOpen, 
    })
  }


  render() { 
    let breadcrumbListItems =

      [
        {
            url:`${window.location}`, 
            name:"Top",
        },
      ]

    let pathToImagesFolder = "../../assets/images"

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
        <HomeTop />        
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