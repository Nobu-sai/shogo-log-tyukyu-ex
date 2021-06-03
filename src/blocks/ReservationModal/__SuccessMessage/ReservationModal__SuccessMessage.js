import React, { Component } from 'react'

export default class ReservationModalSuccessMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    return (
      <div className="reservation-modal__success-message reservation-modal__contents">

        <div 
          className="reservation-modal__close-icon"
          onClick={this.closeModal}
        ></div>

        <div className="reservation-modal__title reservation-modal__title_success-message reservation-modal__success-message_content">
          ご予約完了です。
          {/* <span>ありがとうございます。</span> */}
        </div>

        <div className="reservation-modal__success-message_content_details">         
          <div className="reservation-modal__success-message_content_details_title">
            下記の内容で、承りました。 
          </div> 
          <div className="reservation-modal__success-message_content_details-contents">
              {
                // console.log(this.props.submissionContents)
                // date: "2021年6月3日木曜日　から　2021年6月10日木曜日　まで"
                // email: "fdsf@gmail.com"
                // name: "fdsf"
                // plan: "② 平日に優雅に楽しむ、特別宿泊プラン"
              }
              <div className="reservation-modal__success-message_content_details_content">
                お名前<br/>: {this.props.submissionContents.name}　様
              </div>
              <div className="reservation-modal__success-message_content_details_content">
                メールアドレス<br/>: {this.props.submissionContents.email}
              </div>
              <div className="reservation-modal__success-message_content_details_content">
                宿泊プラン<br/>: {this.props.submissionContents.plan}
              </div>
              <div className="reservation-modal__success-message_content_details_content">
                日時<br/>: {this.props.submissionContents.date}
              </div>
              
              <div className="reservation-modal__success-message_content_details_announcement">
                {this.props.submissionContents.email}へご予約完了のメールを送信致します。<br/>（以後のお手続きは不要ございません。）
              </div>
          </div> 
        </div>
        <div className="reservation-modal__title reservation-modal__success-message_content_end-message">
          {this.props.submissionContents.name}様、
          <span>お越しをお待ち致しております。</span>
          <span className="reservation-modal__title_annotation">ー　石井花壇スタッフ一同　ー</span>
        </div>

        <div className="reservation-modal__button_success-message_content reservation-modal__button-container">
          <div 
            className="reservation-modal__button reservation-modal__success-message_content_close-button"
            onClick={this.props.closeModal}
          >
            閉じる
          </div>
        </div>
 
        
      </div>
    )
  }
}
