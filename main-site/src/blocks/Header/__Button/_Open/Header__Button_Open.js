import React, { Component } from 'react'
import $ from 'jquery';

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default class HeaderButtonOpen extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }
  
  componentDidMount() {
    this.$openButton = $(this.openButton);
    this.$openButton.animate({top: '-50px'}, 0)

    setTimeout(()=>{
      this.$openButton.animate({
        top: '14px',
        // right: '14px'
    }, 500)
    }, 200)
  }

  render() {
    return (
      
      <div
      >
        <MenuOpenIcon 
          ref={openButton => this.openButton = openButton}
          className={`header__button_open header__button_open_color_${this.props.contentsColor}`}
          onClick={this.props.handleOnClick}
        /> 
      </div>
    )
  }
}
