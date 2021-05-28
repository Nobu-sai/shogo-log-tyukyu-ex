// Instruction
  // In Parent Component, 
  // 1. Add a State for Conditional RenderingPropTypes.any,
  // 2. Add a Method to toggle the State. 
  // 3. Send the Method to the Header Component through to Reservation Button. 

// Import 
import React, { Component } from 'react'
import $ from 'jquery';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default class ReservationModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }

    this.openModal = this.openModal.bind(this); 
    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  componentDidMount() {
    this.$reservationModalContents = $(this.reservationModalContents);    
    this.$reservationModalContents.fadeOut(0);
    setTimeout(this.openModal, 100)
    
  }

  openModal() { 
    this.$reservationModalContents.fadeIn(500);
  }

  closeModal() {
    console.log("modal clicked")
    this.$reservationModalContents.fadeOut(500, ()=>{
    
      setTimeout(this.props.toggleReservationModal(), 500);

    });
  }

  submitForm() {
    console.log("submitted");
    
    this.closeModal()

  }

  
  

  render() {
        
    return (
      <div className={`reservation-modal`}>
        
          <div 
            className="reservation-modal__contents reservation-modal_opacity-04"
            ref={reservationModalContents => this.reservationModalContents = reservationModalContents} 
          >
            <div 
              className="reservation-modal__form reservation-modal_opacity-01"
            >
              <div 
                className="reservation-modal__close-icon"
                onClick={() => this.closeModal()}
              >
                
              </div>
              <div className="reservation-modal__form-contents">
                <div className="reservation-modal__form-content reservation-modal__form-content_title">
                  宿泊予約
                </div>

                <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container reservation-modal__form-content_user-input-container_num_1">
                  <div className="reservation-modal__form-content_user-input-title">
                    お名前
                  </div>
                  <input className="reservation-modal__form-content_user-input" type="text" placeholder="例：石井正悟" />
                </div>

                <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                  <div className="reservation-modal__form-content_user-input-title">
                    メールアドレス
                  </div>
                  <input className="reservation-modal__form-content_user-input" type="text" placeholder="例：Example@example.com"/>
                </div>

                <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container">
                  <div className="reservation-modal__form-content_user-input-title reservation-modal__form-content_user-input-title_plan">
                    
                      ご希望プラン 
                    <span className="reservation-modal__form-content_user-input-title_annotation"> 
                     （空いているプランのみ表示されます）
                    </span>
                  </div>
                  <select 
                    name="plans"
                    className="reservation-modal__form-content_user-input reservation-modal__form-content_select-box"
                  >
                    {/* プランを選択してください */}
                    <option selected="selected" disabled="true" className="reservation-modal__form-content_select-box_option_placeholder">プランを選択してください</option>
                    <option value="plan-1">①【期間限定】海辺の四季旬彩、贅沢美味懐石プラン</option>
                    <option value="plan-2">② 平日に優雅に楽しむ、特別宿泊プラン</option>
                    <option value="plan-3">③ 絶景貸切露天と個室会席を満喫できるファミリープラン </option>
                  </select>
                </div>

                <div className="reservation-modal__form-content reservation-modal__form-content_user-input-container reservation-modal__form-content_flatpickr-container">
                  <div className="reservation-modal__form-content_user-input-title">
                    日時選択
                  </div>
                  <Flatpickr 
                    className="reservation-modal__form-content_user-input reservation-modal__form-content_flatpickr"                    
                    options={{ 
                      minDate: this.state.date,
                      mode: "range",                       
                    }}
                    defaultValue="日時を選択してください"
                    onChange={date => {
                      this.setState({ date });
                    }}
                    
                  /> 
                </div>

                <div className="reservation-modal__form-content reservation-modal__form-content_submit-button-container">
                  <div 
                    className="reservation-modal__form-content_submit-button"
                    onClick={this.submitForm}
                  >
                    送信する
                  </div>
                  
                </div>

              </div>
            
            </div>
          </div>

      </div>
    )
  }
}
