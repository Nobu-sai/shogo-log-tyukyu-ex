import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Fade, Slide } from "react-awesome-reveal";

export default class FooterMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

 
  render() {
    return (
      <div 
        className="footer__menu"
      >              

        <div className="footer__menu_grid-container">
          <div className="footer__menu_grid-item">

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
            <Link 
              className={`link link_color_black`}
              to='/onsen'
            >
              温泉　
            </Link> 
            </Slide>
          </div>
          <div className="footer__menu_grid-item">
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
            <Link 
              className={`link link_color_black`}         
              to='/oryori'
            >
              お料理
            </Link> 
            </Slide>
          </div>
          <div className="footer__menu_grid-item">
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
            <Link 
              className={`link link_color_black`}      
              to='/oheya'
            >
              お部屋
            </Link> 
            </Slide>
          </div>
          
        </div>
      </div>
    )
  }
}
