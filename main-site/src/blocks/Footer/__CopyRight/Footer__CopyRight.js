import React, { Component } from 'react'
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default class FooterCopyright extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  
  render() {
    return (
      <Fade 
        triggerOnce
        duration={3000}
        style={{
  
          'width': '100%', 
          'height': '100%'
          }
        }
    >
    <div className="footer__copy-right">
      <div className="footer__copy-right_text">
        Copyright © 石井花壇 All Rights Reserved.
        </div>
      </div>
      </Fade>
    )
  }
}

