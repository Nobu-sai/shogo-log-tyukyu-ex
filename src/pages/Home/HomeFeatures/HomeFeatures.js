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
        <div className="home-features__contents-container">
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
                      <div>???????????????????????????<br/>????????????????????????????????????</div>
                    </Slide>  
                  </div>
                  <div className="home-features__description-content home-features__description-texts">
                    <Slide direction="up" triggerOnce>
                      <div>??????????????????????????????????????????????????????????????????????????????<br/>????????????????????????????????????<br/>?????????????????????????????????????????????????????????????????????</div>
                    </Slide>  
                  </div>
                  <div className="home-features__description-content home-features__description-button_container">
                    <Slide direction="up" triggerOnce>
                    <Link className="link" to="/oheya">
                      <div className="home-features__description-button">?????????????????????</div>
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
                      <div>??????????????????<br/>?????????????????????</div>
                    </Slide>  
                  </div>
                    <div className="home-features__description-content home-features__description-texts">
                      <Slide direction="up" triggerOnce>
                        <div>
                        ???????????????????????????????????????????????????<br/>?????????A5???????????????????????????????????????<br/>??????????????????????????????????????????????????????<br/>?????????????????????
                        </div>
                      </Slide>  
                    </div>
                    <div className="home-features__description-content home-features__description-button_container">
                    <Slide direction="up" triggerOnce>
                      <Link className="link" to="/oryori">
                        <div className="home-features__description-button">?????????????????????</div>
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
                        ???????????????????????????????????????<br/>?????????????????????????????????
                      </div>
                    </Slide>  
                  </div>
                    <div className="home-features__description-content home-features__description-texts">
                      <Slide direction="up" triggerOnce>
                      <div>
                        ??????????????????????????????????????????????????????????????????????????????<br/>?????????????????????????????????????????????????????????????????????????????????<br/>????????????????????????
                      </div>
                      </Slide>  
                    </div>
                    <div className="home-features__description-content home-features__description-button_container">
                      <Slide direction="up" triggerOnce>
                      <Link className="link" to="/onsen">                          
                        <div className="home-features__description-button">?????????????????????</div>
                      </Link>                          
                      </Slide>  
                    </div>
                </div>

              </div>
            </div>
          </ ScrollingSection>

        </div>

      </div>
      </Fade>
    )
  }
}
