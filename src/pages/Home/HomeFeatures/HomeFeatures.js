import React, { Component } from 'react'

import ScrollingSection from '../../../blocks/SrollingSection/ScrollingSection';

import { Link } from 'react-router-dom';

export default class Homefeatures extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="home-features">
          <ScrollingSection >
            <div className="home-features_grid-container">
                <div className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-1"></div>
                <div className="home-features_grid-item home-features_grid-item_description-1">
                  <div className="home-features__description-container">
                    <div className="home-features__description-content home-features__description-title">
                      喧騒から離れた空間<br/>心落ち着く至極のひととき
                    </div>
                      <div className="home-features__description-content home-features__description-texts">
                        まるで時が止まったかのような、圧倒的な静寂のなかで、<br/>ひたすらにゆったりと…。<br/>最高級の「何もしない時間」をお過ごしください。
                      </div>
                      <div className="home-features__description-content home-features__description-button_container">

                        <Link className="link home-features__description-button" to="/oheya">
                          お部屋について
                        </Link>  
                        
                      </div>
                  </div>
                </div>
                <div className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-2"></div>
                <div className="home-features_grid-item home-features_grid-item_align-items_flex-end home-features_grid-item_description-2">
                  <div className="home-features__description-container  home-features__description-container_align-items_flex-end">
                    <div className="home-features__description-content home-features__description-title">
                      出迎えるのは<br/>極上の温海料理
                    </div>
                      <div className="home-features__description-content home-features__description-texts">
                        最も旬の食材を愉しむ、最高の贅沢を<br/>最高級A5ランクの米沢牛と共に頂く。<br/>あなたの人生史に残る「極上の感動」を<br/>お約束します。
                      </div>
                      <div className="home-features__description-content home-features__description-button_container">
                        <Link className="link home-features__description-button" to="/oryori">
                          お料理について
                        </Link>  
                      </div>
                  </div>

                </div>
                <div className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-3"></div>
                <div className="home-features_grid-item home-features_grid-item_description-3">
                  <div className="home-features__description-container">
                    <div className="home-features__description-content home-features__description-title">
                      疲れ切った身体にやすらぎを<br/>温海の源泉に癒やされて
                    </div>
                      <div className="home-features__description-content home-features__description-texts">
                        古くは弘法大師の病をも治療したと言われる熱海の泉質。<br/>現代人の疲弊しきった身体を修復する最高級の湯治場として<br/>ご活用ください。
                      </div>
                      <div className="home-features__description-content home-features__description-button_container">
                        <Link className="link home-features__description-button" to="/onsen">
                          お温泉について
                        </Link>                          
                      </div>
                  </div>

                </div>
            </div>
          </ ScrollingSection>
      </div>
    )
  }
}
