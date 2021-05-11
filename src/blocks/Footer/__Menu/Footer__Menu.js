import React, { Component } from 'react'

import { Link } from 'react-router-dom';

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
          <Link 
            className={`link link_color_black footer__menu_grid-item footer__menu_onsen`}
            to='/onsen'
          >
            温泉
          </Link> 
          <Link 
            className={`link link_color_black footer__menu_grid-item footer__menu_oryori`}         
            to='/oryori'
          >
            お料理
          </Link> 
          <Link 
            className={`link link_color_black footer__menu_grid-item footer__menu_oheya`}      
            to='/oheya'
          >
            お部屋
          </Link> 
          
        </div>
      </div>
    )
  }
}
