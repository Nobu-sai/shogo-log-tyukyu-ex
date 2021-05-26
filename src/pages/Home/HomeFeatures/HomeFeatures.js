import React, { Component } from 'react'


import ScrollingSection from '../../../blocks/SrollingSection/ScrollingSection';
import { Link } from 'react-router-dom';
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default class Homefeatures extends Component {
  constructor(props) {
    super(props)

    this.state = {
         windowWidth: 600,
    }

  }

  componentDidMount() {
  }

  render() {
    return (
      <Fade
        // effect="flash"
        duration={3000}
        triggerOnce
      >
      <div 
        className="home-features"        
      >
        
          <ScrollingSection 
            stopScrolling={'1000'}            
          >
            <div className="home-features_grid-container">
              
              {/* {this.state.windowWidth >= 600 && <Slide direction="up"> } */}
              
                {/* <div 
                  className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-1"                  
                > */}
              <div className="home-features_grid-item home-features_grid-item_picture-container home-features_grid-item_picture-container-1">

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
                  <div className="home-features_picture home-features_picture-1"></div>
                </Slide>
              </div>
                {/* </div> */}
                {/* {this.state.windowWidth >= 600 &&  </Slide> } */}
              
              <div className="home-features_grid-item home-features_grid-item_description-1">
                <div className="home-features__description-container">
                  <div 
                    className="home-features__description-content home-features__description-title" 
                  >
                    <Slide direction="up" triggerOnce>
                      <div>喧騒から離れた空間<br/>心落ち着く至極のひととき</div>
                    </Slide>  
                  </div>
                  <div className="home-features__description-content home-features__description-texts">
                    <Slide direction="up" triggerOnce>
                      <div>まるで時が止まったかのような、圧倒的な静寂のなかで、<br/>ひたすらにゆったりと…。<br/>最高級の「何もしない時間」をお過ごしください。</div>
                    </Slide>  
                  </div>
                  <div className="home-features__description-content home-features__description-button_container">
                    <Slide direction="up" triggerOnce>
                    <Link className="link" to="/oheya">
                      <div className="home-features__description-button">お部屋について</div>
                    </Link>  
                    </Slide>  
                    
                  </div>
                </div>
              </div>
                
                {/* <Slide direction="up" triggerOnce>
                <div className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-2"></div>
                </Slide> */}
              <div className="home-features_grid-item home-features_grid-item_picture-container home-features_grid-item_picture-container-2">

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
                  <div className="home-features_picture home-features_picture-2"></div>
                </Slide>
              </div>

              <div className="home-features_grid-item home-features_grid-item_align-items_flex-end home-features_grid-item_description-2">
                <div className="home-features__description-container  home-features__description-container_align-items_flex-end">
                  <div className="home-features__description-content home-features__description-title">
                    <Slide direction="up" triggerOnce>
                      <div>出迎えるのは<br/>極上の温海料理</div>
                    </Slide>  
                  </div>
                    <div className="home-features__description-content home-features__description-texts">
                      <Slide direction="up" triggerOnce>
                        <div>
                        最も旬の食材を愉しむ、最高の贅沢を<br/>最高級A5ランクの米沢牛と共に頂く。<br/>あなたの人生史に残る「極上の感動」を<br/>お約束します。
                        </div>
                      </Slide>  
                    </div>
                    <div className="home-features__description-content home-features__description-button_container">
                    <Slide direction="up" triggerOnce>
                      <Link className="link" to="/oryori">
                        <div className="home-features__description-button">お料理について</div>
                      </Link>  
                    </Slide>  
                    </div>
                </div>

              </div>

              {/* <Slide direction="up" triggerOnce>
              <div className="home-features_grid-item home-features_grid-item_picture home-features_grid-item_picture-3"></div>
              </Slide>   */}
              <div className="home-features_grid-item home-features_grid-item_picture-container home-features_grid-item_picture-container-3">

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
                  <div className="home-features_picture home-features_picture-3"></div>
                </Slide>
              </div>
              
              <div className="home-features_grid-item home-features_grid-item_description-3">
                <div className="home-features__description-container">
                  <div className="home-features__description-content home-features__description-title">
                    <Slide direction="up" triggerOnce>
                      <div>
                        疲れ切った身体にやすらぎを<br/>温海の源泉に癒やされて
                      </div>
                    </Slide>  
                  </div>
                    <div className="home-features__description-content home-features__description-texts">
                      <Slide direction="up" triggerOnce>
                      <div>
                        古くは弘法大師の病をも治療したと言われる熱海の泉質。<br/>現代人の疲弊しきった身体を修復する最高級の湯治場として<br/>ご活用ください。
                      </div>
                      </Slide>  
                    </div>
                    <div className="home-features__description-content home-features__description-button_container">
                      <Slide direction="up" triggerOnce>
                      <Link className="link" to="/onsen">                          
                        <div className="home-features__description-button">お温泉について</div>
                      </Link>                          
                      </Slide>  
                    </div>
                </div>

              </div>
            </div>
          </ ScrollingSection>
      </div>
      </Fade>
    )
  }
}
