import React, { Component } from 'react'
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading'
import HomeAccessGoogleMap from './__GoogleMap/HomeAccess__GoogleMap';

export default class HomeAccess extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  
  render() {
    return (
      <Fade 
        duration={3000}
        triggerOnce
      >
      <div className="page-section home-access">
        <div className="home-access__heading-container">
          <HomeSectionHeading headingTitle={'アクセス'}/>
        </div>

        <div className="home-access__contents">
          <div className="home-access__content home-access__appearance-container">
          <Slide 
            direction="up" 
            triggerOnce
            style={
              {
                'width': '100%', 
                'height': '100%'
              }
            }
          >
            <div className="home-access__appearance">

            </div>


          </Slide>
          </div>

          <div className="home-access__content home-access__info-container">

            <Slide 
              direction="up" 
              triggerOnce
              style={
                {
                  'width': '100%', 
                  'height': '100%'
                }
              }
            >

            <div className="home-access__info">
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
            </Slide>
          </div>
          <div className="home-access__content home-access__map-container">

            <Slide 
              direction="up" 
              triggerOnce
              style={
                {
                  'width': '100%', 
                  'height': '100%'
                }
              }
            >
                <HomeAccessGoogleMap />
            </Slide>

          </div>

          
        </div>

      </div>
      </Fade>
    )
  }
}

