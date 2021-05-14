import React, { Component } from 'react'

import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default class HeaderButtonOpen extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }
  

  render() {
    return (
      
      <div>
        <MenuOpenIcon 
          className={`header__button_open header__button_open_color_${this.props.contentsColor}`}
          onClick={this.props.handleOnClick}
        /> 
      </div>
    )
  }
}