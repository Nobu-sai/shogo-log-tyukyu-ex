import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class HeaderReservation extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }
  

  render() {
    // console.log(this.props.contentsColor)

    return (
      <div className={`header__reservation header__reservation_color_${this.props.contentsColor}`}>
        <div 
          className="header__reservation_button"
          onClick={this.props.toggleReservationModal}
        >
          <div className={`header__reservation_calendar-icon header__reservation_calendar-icon_color_${this.props.contentsColor}`}></div>
          <div className={`header__reservation_title header__reservation_color_${this.props.contentsColor}`}>
            宿泊予約
          </div>
        </div>
      </div>
    )
  }
}
