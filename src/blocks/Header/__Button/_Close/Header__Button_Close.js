import React, { Component } from 'react'

import CloseIcon from '@material-ui/icons/Close';

 export default class HeaderButtonClose extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (
      <>
        <CloseIcon 
          className={`header__button_close header__button_close_color-${this.props.contentsColor} `}
          onClick={this.props.handleOnClick}         
        />
      </>
    )
  }
}
