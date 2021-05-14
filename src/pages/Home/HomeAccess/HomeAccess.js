import React, { Component } from 'react'
import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading'

export default class HomeAccess extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  
  render() {
    return (
      <div className="home-access">
        <div className="home-access__heading-container">
          <HomeSectionHeading headingTitle={'アクセス'}/>
        </div>
        <div className="home-access__contents">
          <div className="home-access__contents home-access__appearance">

          </div>
          <div className="home-access__content home-access__info">
            <div className="home-access__info-content">
              住所
            </div>
            <div className="home-access__info-content">
              〒000-0000 
            </div>
            <div className="home-access__info-content">
              山形県鶴岡市xxxxxxxxxx
            </div>
            <div className="home-access__info-content">
              TEL/FAX
            </div>
            <div className="home-access__info-content">
              000-0000-0000/00-0000-0000

            </div>
            <div className="home-access__info-content">
              営業時間
            </div>
            <div className="home-access__info-content">
              14:00-23:00
            </div>
            <div className="home-access__info-content">
              ＊4名以上のご予約の場合は、最寄り駅の「鶴岡駅」より送迎が可能ですので、ご連絡ください。
            </div>
          </div>
          <div className="home-access__content home-access__map">

          </div>
        </div>

      </div>
    )
  }
}

