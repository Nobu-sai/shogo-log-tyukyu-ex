import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import { ReactDOM } from 'react-dom';
import { motion } from "framer-motion"


// import Header from '../../blocks/Header/Header';
import StructuredDataBreadcrumbList from '../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList';
import InitialAnimation from '../../blocks/InitialAnimation/InitialAnimation';

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

    // let pathToImagesFolder = "../../assets/images"

    const page = { 
      exit: {
        opacity: 0 
      }
    }

    const pageContainer = {
      initial: {
        // opacity: 0       
      },
      animate: {
        // opacity: 1,
        animate: {
          transition: { 
            staggerChildren: 5.0, 
            // delayChildren: 2.8 
          },
        },
      },

    }

    const pageContents = {
      initial: {
        opacity: 0,
        y: '-100vh',
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 2.0,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },

    }
    

    return (

      <motion.div 
        exit="exit"
        exitBeforeEnter
        className="home" 
        ref={home => this.home = home}
        variants={page}
      >  

        

        <Helmet>          
          <title>石井花壇 | 温海温泉旅館【公式サイト】 </title>

        </Helmet>

        <StructuredDataBreadcrumbList 
          breadcrumbListItems={breadcrumbListItems}
        />
        
        <Header 
            toggleReservationModal={this.toggleReservationModal}
        />        
         {/* Has Initial Animation */}


        <motion.div
          initial="initial"
          animate="animate"
          variants={pageContainer}
        >

          <motion.div
            initial="initial"
            animate="animate"
            variants={pageContents}
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