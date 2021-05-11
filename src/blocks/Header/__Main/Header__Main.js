import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  
  }


  render() {
    return (
      <div className={`header__main header__main_contents-color_${this.props.contentsColor}`}>
          <Link 
            className={`link link_${this.props.contentsColor} header__main_flex-container`}
            to='/'
          >
            <div className={`header__main_logo header__main_logo_color_${this.props.contentsColor}`}></div>
            <div className={`header__main_title header__main_title_color_${this.props.contentsColor}`}>石井花壇</div>
          </Link>
      </div>
    )
  }
}
