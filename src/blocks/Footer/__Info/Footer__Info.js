import React, { Component } from 'react'

export default class FooterInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="footer__info">
        <div className="footer__info_grid-container">
          <div className="footer__info_grid-item footer__info_grid-item_post">
            <div 
              className="footer__info_grid-item_post-number"
            >
              〒000-0000
            </div>
            <div
              className="footer__info_grid-item_post-region"
            >
              山形県鶴岡市xxxxxxxxxxx
            </div>
          </div>
          <div className="footer__info_grid-item footer__info_grid-item_tel">
            TEL.000-0000-0000
          </div>
          <div className="footer__info_grid-item footer__info_grid-item_fax">
            FAX.00-0000-0000
          </div>
        </div>         
      </div>
    )
  }
}
