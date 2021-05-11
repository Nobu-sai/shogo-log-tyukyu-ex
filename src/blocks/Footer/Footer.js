import React, { Component } from 'react'

import FooterMenu from './__Menu/Footer__Menu';
import FooterMain from './__Main/Footer__Main';
import FooterInfo from './__Info/Footer__Info';
import FooterCopyRight from './__CopyRight/Footer__CopyRight';

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (
      <div className="footer footer_grid-container">
        <div className="footer_grid-item footer_grid-item_menu">
          <FooterMenu />
        </div>
        <div className="footer_grid-item footer_grid-item_main">
          <FooterMain />
        </div>
        <div className="footer_grid-item footer_grid-item_info">
          <FooterInfo />
        </div>
        <div className="footer_grid-item footer_grid-item_copy-right">
          <FooterCopyRight />
        </div>
      </div>
    )
  }
}
