import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";


import Header from '../../blocks/Header/Header';
import SubPageTop from './__Top/SubPage__Top';
import SubPageMainContents from './__MainContents/SubPage__MainContents';
import Footer from '../../blocks/Footer/Footer';
import ReservationModal from '../../blocks/ReservationModal/ReservationModal';


export default class SubPage extends Component {
  constructor(props) {
    super(props)


      this.state = {
        reservationModalIsOpen: false,
          
      }
      this.toggleReservationModal = this.toggleReservationModal.bind(this);
    
  }

  
  toggleReservationModal() {
    this.setState({
      reservationModalIsOpen: !this.state.reservationModalIsOpen, 
    })
  }


  render() {

    const {
      props: {        
        pageTitle,
        bgName,
        currentPage,
          // An Object
        IntroTextList,
          // An Array
        gridContents,
          // An Array
        gridContentNumber,
          // Number
        customSection,
          // A Component
      }
    } = this;

    return (
      <div className="sub-page">
        <Helmet>
          <title>{pageTitle} - 石井花壇 | 温海温泉旅館【公式サイト】</title>
        </Helmet>
        <Header 
          toggleReservationModal={this.toggleReservationModal}
        />        
        <Fade
          duration={3000}
          style={
            {
              'width': '100%', 
              'height': '100%'
            }
          }
        >
        <div className="sub-page__top-container">
          <SubPageTop 
            bgName={bgName}
            pageTitle={pageTitle}
          />
        </div>
        </Fade>
        <Fade
          duration={3000}
          style={
            {
              'width': '100%', 
              'height': '100%'
            }
          }
        >
        <div className="sub-page__main-contents-container">
          <SubPageMainContents 
            pageTitle={pageTitle}
            currentPage={currentPage}
            IntroTextList={IntroTextList}
            gridContents={gridContents}        
            gridContentNumber={gridContentNumber}    
            customSection={customSection}


          />
        </div>       
          
        </Fade>
        
        <div className="sub-page__footer-container">
          <Footer />        
        </div>

        {
          this.state.reservationModalIsOpen && <ReservationModal reservationModalIsOpen={this.state.reservationModalIsOpen} toggleReservationModal={this.toggleReservationModal}/>
        }

      </div>
    )
  }
}
