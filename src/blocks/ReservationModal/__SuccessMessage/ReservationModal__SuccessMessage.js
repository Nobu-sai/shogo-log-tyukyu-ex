import React, { Component } from 'react'
import $ from 'jquery';

export default class ReservationModalSuccessMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    this.showSuccessMessageContents = this.showSuccessMessageContents.bind(this); 
    
  }


  componentDidMount() {    
    this.$reservationModalSuccessMessageContents = $(this.reservationModalSuccessMessageContents);    
    this.$reservationModalSuccessMessageContents.fadeOut(0, ()=> {
      // this.$reservationModalSuccessMessageContents.css({
      //   'border': 'none',
      // })
    });
    setTimeout(this.showSuccessMessageContents, 500)
    
  }

  showSuccessMessageContents() { 
    this.$reservationModalSuccessMessageContents.fadeIn(500);
  }

  render() {
    return (
      <div className="reservation-modal__success-message">

        <div
          className="reservation-modal__success-message_contents"
          ref={reservationModalSuccessMessageContents => this.reservationModalSuccessMessageContents = reservationModalSuccessMessageContents} 
        >
            

          <div className="reservation-modal__title reservation-modal__title_success-message reservation-modal__success-message_title">
            ご予約完了です。
            
          </div>

          <div className="reservation-modal__success-message_details">         
            <div className="reservation-modal__success-message_details_title">
              下記の内容で、承りました。 
            </div> 
            
                <div className="reservation-modal__success-message_details_content">
                  お名前<br/>　{this.props.submissionContents.name} 様
                </div>
                <div className="reservation-modal__success-message_details_content">
                  メールアドレス<br/>　{this.props.submissionContents.email}
                </div>
                <div className="reservation-modal__success-message_details_content">
                  宿泊プラン<br/>　{this.props.submissionContents.plan}
                </div>
                <div className="reservation-modal__success-message_details_content">
                  日時<br/>　{this.props.submissionContents.date}
                </div>
                <div className="reservation-modal__success-message_details_horizontal-line"></div>
                <div className="reservation-modal__success-message_details_announcement">
                  {this.props.submissionContents.email}へご予約完了のメールを送信致しました。
                  （以後のお手続きはございません。）
                </div>
            
          </div>

            
              <div className="reservation-modal__title reservation-modal__success-message_farewell-message">
                <span className="reservation-modal__success-message_farewell-message-name">{this.props.submissionContents.name} 様、</span>
                <span className="reservation-modal__success-message_farewell-message-waiting">お越しをお待ち致しております。</span>
                <span className="reservation-modal__title_annotation reservation-modal__success-message_farewell-message_annotation">ー　石井花壇一同　ー</span>
              </div>


              <div className="reservation-modal__button-container reservation-modal__success-message_button-container">
                <a 
                  className="reservation-modal__success-message_route" 
                  href="https://www.google.com/maps/dir/?api=1&destination=38.636752,139.602052" 
                  target="_blank"                  
                >
                  <div className="reservation-modal__success-message_route-icon"></div> 
                  <div className="reservation-modal__success-message_route-text">
                    ルート
                  </div>
                  <div className="reservation-modal__success-message_route-annotation">
                    * Google Mapの公式サイトへ

                  </div>
                  
                </a>

                <div className="reservation-modal__success-message_center-line">
                </div>

                <div 
                  className="reservation-modal__button reservation-modal__button_success-message reservation-modal__success-message_button"
                  onClick={this.props.closeModal}
                >
                  閉じる
                </div>
              </div>



  
          
        </div>
      </div>
    )
  }
}
