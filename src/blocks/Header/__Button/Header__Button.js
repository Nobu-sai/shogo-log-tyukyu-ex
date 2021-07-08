import React, { Component } from 'react'
import { Spiral as Hamburger } from 'hamburger-react'

export default class HeaderButtonOpen extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  
  componentDidMount() {
    // this.$openButton = $(this.openButton);
    // this.$openButton.animate({top: '-50px'}, 0)

    // setTimeout(()=>{
    //   this.$openButton.animate({
    //     top: '14px',
    //     // right: '14px'
    // }, 500)
    // }, 200)
  }

  render() {

    let buttonColor;
    if(this.props.contentsColor === 'black') {
      buttonColor = 'hsl(0, 0%, 0%)'
    } else {
      buttonColor = 'hsl(0, 0%, 100%)'
    }

    return (
      
      <div 
        className='header__button'
        onClick={this.props.handleOnClick}
      >
        <Hamburger
          label="サイトメニュー"     
          distance="md"   
          color={buttonColor}   
        />        
      </div>
    )
  }
}