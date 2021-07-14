import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import InitialAnimation from '../../InitialAnimation/InitialAnimation';

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  
  }


  render() {


    return (
      <div className={`header__main header__main_contents-color_${this.props.contentsColor}`}>
          {
            this.props.isSiteFirstMount &&
            <InitialAnimation 
              controllScrollingUnderneath={this.props.controllScrollingUnderneath}            
            /> 

          }
          <Link 
            className={`link link_color_${this.props.contentsColor} header__main_flex-container`}
            to='/'
            onClick={this.props.handleOnClick}
          >
            <div className={`header__main-logo header__main-logo_color_${this.props.contentsColor}`}></div>
            <div className={`header__main-title header__main-title_color_${this.props.contentsColor}`}>石井花壇</div>
          </Link>
      </div>
    )
  }
}
