import React, { Component } from 'react'
// import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";
import { motion } from "framer-motion"




import SubPageTop from '../__Top/SubPage__Top';
import SubPageMainContents from '../__MainContents/SubPage__MainContents';
import Footer from '../../../blocks/Footer/Footer';
import ReservationModal from '../../../blocks/ReservationModal/ReservationModal';


export default class SubPage extends Component {

  render() {
      // console.log(breadcrumbListItems);

    return (

      <div className="sub-page__contents">

      
              <SubPageTop 
                bgName={this.props.bgName}
                pageTitle={this.props.pageTitle}
              />
            
              <SubPageMainContents 
                pageTitle={this.props.pageTitle}
                currentPage={this.props.currentPage}
                IntroTextList={this.props.IntroTextList}
                gridContents={this.props.gridContents}        
                gridContentsAmount={this.props.gridContentsAmount}    
                customSection={this.props.customSection}
                // className="sub-page__main-contents-container"

              />
              
            
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
