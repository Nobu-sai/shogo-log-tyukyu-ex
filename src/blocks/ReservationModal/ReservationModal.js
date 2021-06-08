// Instruction
  // In Parent Component, 
  // 1. Add a State for Conditional Rendering.
  // 2. Add a Method to toggle the State. 
  // 3. Send the Method to the Header Component through to Reservation Button. 

// Import 
import React, { Component } from 'react'
import $ from 'jquery';

import ReservationModalSuccessMessage from './__SuccessMessage/ReservationModal__SuccessMessage';
import ReservationModalMainContent from './__MainContent/ReservationModal__MainContent';

export default class ReservationModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submissionSuccess: false,
      submissionContents: 
        // null,
        {
          date: "2021年6月3日木曜日　から　2021年6月10日木曜日",
          email: "fdsf@gmail.com",
          name: "fdsf",
          plan: "② 平日に優雅に楽しむ、特別宿泊プラン",
        },
    }

    this.openModal = this.openModal.bind(this); 
    this.closeModal = this.closeModal.bind(this);
    this.hideContentsContainer = this.hideContentsContainer.bind(this);
    this.showContentsContainer = this.showContentsContainer.bind(this);
    this.displaySuccessMessage = this.displaySuccessMessage.bind(this);
    this.setSubmissionContents = this.setSubmissionContents.bind(this);

  }


  componentDidMount() {
    this.$reservationModalBG = $(this.reservationModalBG);    
    this.$reservationModalContentsContainer = $(this.reservationModalContentsContainer);    
    this.$reservationModalSuccessMessage = $(this.reservationModalSuccessMessage);    
    this.$reservationModalBG.fadeOut(0);
    setTimeout(this.openModal, 100)
    
  }

  openModal() { 
    this.$reservationModalBG.fadeIn(500);
  }

  closeModal() {
    // console.log("modal clicked")
    this.$reservationModalBG.fadeOut(500, ()=>{
    
      setTimeout(this.props.toggleReservationModal(), 500);

    });
  }


  hideContentsContainer() {
    this.$reservationModalContentsContainer.fadeOut(300, ()=>{

      setTimeout(()=> {
        this.showContentsContainer()
      }, 500)
    });

  }
  showContentsContainer() {
    this.$reservationModalContentsContainer.fadeIn(500);

  }

  displaySuccessMessage() {   
    this.hideContentsContainer(
      
      setTimeout(()=> {        
        this.setState(
          {
              submissionSuccess: true,          
          },
        )
      }, 500)
    
    )
  }

  setSubmissionContents(values) {

    // console.log(values)
    this.setState({
      submissionContents: values
    })

  }




  
  

  render() {
            
    return (
      <div className={`reservation-modal`}>
        
          <div 
            className="reservation-modal__bg"
            ref={reservationModalBG => this.reservationModalBG = reservationModalBG} 
            // onClick={this.closeModal}
          >

            {
              this.state.submissionSuccess && this.state.submissionContents ? (
                <div 
                  className="reservation-modal__contents-container reservation-modal__contents-container_success-message-container"
                  // className="reservation-modal__contents_success-message" 
                  // ref={reservationModalSuccessMessage=> this.reservationModalSuccessMessage = reservationModalSuccessMessage} 
                >
                <div className="reservation-modal__contents">

                  <ReservationModalSuccessMessage 
                    closeModal={this.closeModal}
                    submissionContents={this.state.submissionContents}
                  />

                </div>

                </div>

              ) : (
                <div 
                  className="reservation-modal__contents-container reservation-modal__contents-container_main-content"   
                  ref={reservationModalContentsContainer => this.reservationModalContentsContainer = reservationModalContentsContainer } 
                >
                
                  <div 
                   className="reservation-modal__contents"                   >                  
                    <ReservationModalMainContent 
                      closeModal={this.closeModal}
                      setSubmissionContents={this.setSubmissionContents}
                      displaySuccessMessage={this.displaySuccessMessage}
                    /> 
                  </div>
                </div>
                
              )
            }

            
        </div>

      </div>
    )
  }
}


// )
                    
// export default ReservationModal;