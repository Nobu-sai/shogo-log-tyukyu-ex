import React, { Component } from 'react'

// import { Link } from 'react-router-dom';
import HeaderTitle from '../__Title/HeaderTitle';

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  
  }


  render() {


    return (
      <div className={`header__main header__main_contents-color_${this.props.contentsColor}`}>
            
            <HeaderTitle
              controllScrollingUnderneath={this.props.controllScrollingUnderneath}            
              handleOnClick={this.props.handleOnClick}
              contentsColor={this.props.contentsColor}
              windowWidth={this.props.windowWidth}
              isSiteFirstMount={this.props.isSiteFirstMount}
            /> 
          
      </div>
    )
  }
}
