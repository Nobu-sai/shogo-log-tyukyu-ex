import React, { Component } from 'react'
import { withRouter } from "react-router";

// Components
import HeaderMain from '../__Main/Header__Main';
import HeaderMenu from '../__Menu/Header__Menu';
import HeaderReservation from '../__Reservation/Header__Reservation';
import HeaderButtonClose from '../__Button/_Close/Header__Button_Close';
// Liberaries

class HeaderContents extends Component {
  constructor(props) {
    super(props)

    this.state = {      
    }

  }


  render() {


    // const {
    //   props: {
    //   }
    
    // } = this;

    let menuVisibility = "hide";
 
    if (this.props.menuVisibility) {
      menuVisibility = "show";
    }

    // console.log("headerColor", this.props.headerColor);
    // console.log("contentsColor", this.props.contentsColor);


    return (
      <div 
        className=
          {
            `
            header__contents 
            header__contents_grid-container 
            header__contents_${menuVisibility}
            header__contents_${this.props.headerColor}
            header__contents_content-color-${this.props.contentsColor}
            `
          }        

      >
      
        <div
          className="header__contents_grid-item header-contents__grid-item header__contents_main"
          onClick={this.props.handleOnClick}
        >
          <HeaderMain contentsColor={this.props.contentsColor}/>
        </div>

        <div 
          className="header__contents_grid-item header__contents_grid-item header__contents_menu">          
          <HeaderMenu 
            handleOnClick={this.props.handleOnClick}
            contentsColor={this.props.contentsColor}
          />
        </div>

        <div 
          className="header__contents_grid-item header__contents_reservation">
            <HeaderReservation contentsColor={this.props.contentsColor}/>
        </div>

        <div>
          <HeaderButtonClose 
            handleOnClick={this.props.handleOnClick}
            contentsColor={this.props.contentsColor}
          />
            {/* Absolte to Header__Contents Block */}
        </div>

      </div>
    )
  }
}

export default withRouter(HeaderContents);