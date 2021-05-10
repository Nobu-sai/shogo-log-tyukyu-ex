import React, { Component } from 'react'
import { withRouter } from "react-router";

// Components
import Header__Main from '../__Main/Header__Main';
import Header__Menu from '../__Menu/Header__Menu';
import Header__Reservation from '../__Reservation/Header__Reservation';
import Header__Button_Close from '../__Button/_Close/Header__Button_Close';
// Liberaries

class Header__Contents extends Component {
  constructor(props) {
    super(props)

    this.state = {      
    }

  }


  render() {


    const {
      props: {
      }
    
    } = this;

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
          <Header__Main contentsColor={this.props.contentsColor}/>
        </div>

        <div 
          className="header__contents_grid-item header__contents_grid-item header__contents_menu">          
          <Header__Menu 
            handleOnClick={this.props.handleOnClick}
            contentsColor={this.props.contentsColor}
          />
        </div>

        <div 
          className="header__contents_grid-item header__contents_reservation">
            <Header__Reservation contentsColor={this.props.contentsColor}/>
        </div>

        <div>
          <Header__Button_Close 
            handleOnClick={this.props.handleOnClick}
            contentsColor={this.props.contentsColor}
          />
            {/* Absolte to Header__Contents Block */}
        </div>

      </div>
    )
  }
}

export default withRouter(Header__Contents);