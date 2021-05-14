import React, { Component } from 'react'

import ScrollingSection from '../../../blocks/SrollingSection/ScrollingSection';
import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading';


export default class HomeRecommended extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="home-recommended">
        <div className="home-recommended__heading-container">
          <HomeSectionHeading headingTitle={'おすすめのご宿泊プラン'}/>
        </div>
        <div className="home-recommended__plans-container">
          <ScrollingSection 
            scrollingSection__Container_BackgroundColor={'transparent'}
            stopScrolling={'1000'}
          >
              <div className="home-recommended__plans">
                    <div className="home-recommended__plan">
                      <div className="home-recommended__plan-picture home-recommended__plan-picture_1">

                      </div>                    
                      <div className="home-recommended__plan-contents home-recommended__plan-title">
                        朝食付きプラン、日本近海で取れた<br/>のどぐろを朝食として…
                      </div>
                      <div className="home-recommended__plan-contents home-recommended__plan-description">
                        最高級と称されるのどぐろ、<br/>正式には「アカムツ」と呼ばれる魚、<br/>味は独特の上品な味わいで、<br/>焼いても煮ても美味
                      </div>
                    </div>

                    <div className="home-recommended__plan">
                      <div className="home-recommended__plan-picture home-recommended__plan-picture_2">

                      </div>
                      <div className="home-recommended__plan-contents home-recommended__plan-title">
                        【期間限定】熱海蟹をたっぷりと<br/>愉しむプラン。
                      </div>
                      <div className="home-recommended__plan-contents home-recommended__plan-description">
                        温海で水揚げされた蟹は「温海蟹」<br/>として知られ、<br/>嗜好品として愛されてきました。<br/>この宿泊プランでは存分に
                      </div>
                    </div>

                    <div className="home-recommended__plan">
                      <div className="home-recommended__plan-picture home-recommended__plan-picture_3">

                      </div>
                      <div className="home-recommended__plan-contents  home-recommended__plan-title">
                        【平日限定】贅沢美味懐石プラン。<br/>海辺の四季旬彩プラン。
                      </div>
                      <div className="home-recommended__plan-contents home-recommended__plan-description">
                        熱海近海で取れた魚を<br/>鮮度そのままに舟盛りにしてご提供。<br/>生きた味をお楽しみください。
                      </div>
                    </div>

              </div>

          </ ScrollingSection>
        </div>
      </div>
    )
  }
}
