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
    this.setState({
      reservationModalIsOpen: !this.state.reservationModalIsOpen, 
    })
  }


  render() {


    return (
      <div className="home" ref={home => this.home = home}>
        {/* <Header /> */}
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
          this.state.reservationModalIsOpen && <ReservationModal reservationModalIsOpen={this.state.reservationModalIsOpen} toggleReservationModal={this.toggleReservationModal}/>
        }
      </div>        
    )
  }
}
