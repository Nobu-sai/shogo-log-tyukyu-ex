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
          {/* <!-- Open Graph / Facebook, LinkedIn... --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://portfolio-static.conohawing.com" />
          <meta property="og:title" content="石井花壇 | 温海温泉旅館【公式サイト】" />
          <meta property="og:description" content="日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。" />
          <meta property="og:image" content="%PUBLIC_URL%/og-image-1200x630.jpg" />

          {/* <!-- Twitter -->  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://portfolio-static.conohawing.com" />
          <meta property="twitter:title" content="石井花壇 | 温海温泉旅館【公式サイト】" />
          <meta property="twitter:description" content="日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"  />
          <meta property="twitter:image" content="%PUBLIC_URL%/og-image-1200x630.jpg" />

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