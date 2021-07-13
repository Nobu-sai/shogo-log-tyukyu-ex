import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";
import { motion } from "framer-motion"


import StructuredDataBreadcrumbList from '../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList';
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

  componentDidMount() {
    window.scrollTo(0, 0);

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
          // Page title in Japanese
        bgName,
        currentPage,
          // An Object
        IntroTextList,
          // An Array
        gridContents,
          // An Array
        gridContentsAmount,
          // Number
        customSection,
          // A Component
      }
    } = this;

    // console.log(window.location)
    // console.log(`${window.location.origin}${window.location.pathname}`)

    const breadcrumbListItems = 
      [
        {
          url:`${window.location.origin}`, 
          name:"Top",
        },
        {
          url:`${window.location.origin}${window.location.pathname}`, 
          name: `${pageTitle}`
        }
      ]
      // console.log(breadcrumbListItems);


    return (
      <motion.div
        exit={{ opacity: 0 }}
        exitBeforeEnter
        className="sub-page" 

      >

        <Helmet>
          <title>{pageTitle} - 石井花壇 | 温海温泉旅館【公式サイト】</title>
          <meta property="og:type" content="website" />    
        </Helmet>
        
        <StructuredDataBreadcrumbList 
          breadcrumbListItems={breadcrumbListItems}
        />

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
            gridContentsAmount={gridContentsAmount}    
            customSection={customSection}


          />
        </div>       
          
        </Fade>
        
        <div className="sub-page__footer-container">
          <Footer />        
        </div>

        {
          this.state.reservationModalIsOpen && 
            <ReservationModal 
              reservationModalIsOpen={this.state.reservationModalIsOpen} 
              toggleReservationModal={this.toggleReservationModal}
            />
        }

 
      </motion.div>
    )
  }
}
