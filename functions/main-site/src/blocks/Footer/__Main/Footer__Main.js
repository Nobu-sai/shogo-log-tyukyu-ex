import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default class FooterMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (
      <div className={`footer__main`}>
          <Link             
            className={`link link_color_black footer__main_contents`}
            to='/'
          >            
            <Slide               
              className="footer__main_content"
              direction="up" 
              triggerOnce
              style={
                {
                  // 'width': '100%', 
                  // 'height': '100%'
                }
              }
            >
              <div className={`footer__main_logo footer__main_logo_color-black`}></div>
            </Slide>
            <Slide               
              className="footer__main_content"
              direction="up" 
              triggerOnce
              style={
                {
                  // 'width': '100%', 
                  // 'height': '100%'
                }
              }
            >
              <div className="footer__main_title">石井花壇</div>
            </Slide> 

          </Link>
      </div>
    )
  }
}
