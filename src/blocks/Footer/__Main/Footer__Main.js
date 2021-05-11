import React, { Component } from 'react'

import { Link } from 'react-router-dom';

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
            className={`link link_color_black  footer__main_flex-container`}
            to='/'
          >
            <div className={`footer__main_logo footer__main_logo_color-black`}></div>
            <div className="footer__main_title">石井花壇</div>
          </Link>
      </div>
    )
  }
}
