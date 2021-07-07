import React, { Component } from 'react'

// import CloseIcon from '@material-ui/icons/Close';

 export default class HeaderButtonClose extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (

      <div
          className={`header__button_close header__button_close_color_${this.props.contentsColor} `}
          onClick={this.props.handleOnClick}         
      >

        {/* <CloseIcon 
          onClick={this.props.handleOnClick}         
        /> */}

      </div>
    )
  }
}
