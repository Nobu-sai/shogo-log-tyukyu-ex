import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { motion } from "framer-motion"


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
      // this.homeBody = React.createRef()  
    }

  componentDidMount() {
    // When the user linked from another page.
    // => Scroll to the top of the page. 
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

    // let pathToImagesFolder = "../../assets/images"

    return (

      <motion.div 
        className="home" 
        ref={homeBody => this.homeBody = homeBody}        
        exit="exit"
        exitBeforeEnter
        variants={this.props.pageVariants()}
      >  

        

        <Helmet>          
          <title>石井花壇 | 温海温泉旅館【公式サイト】 </title>

        </Helmet>

        <StructuredDataBreadcrumbList 
          breadcrumbListItems={breadcrumbListItems}
        />
        
        <Header 
            toggleReservationModal={this.toggleReservationModal}
            isSiteFirstMount={this.props.isSiteFirstMount}
        />        
         {/* 
            = Has Initial Animation 
            => OUTSIDE of the motion.div with pageContainer variant
         */}


        <motion.div
          initial="initial"
          animate="animate"
          variants={this.props.pageContainerVariants()}
        >

          <motion.div
            initial="initial"
            animate="animate"
            variants={this.props.pageContentsVariants(this.props.isSiteFirstMount)}
          >
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
            
          </motion.div>

        </motion.div>
          
      </motion.div>
    )
  }
}