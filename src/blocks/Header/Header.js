import React, { Component } from 'react'

import HeaderContents from './__Contents/Header__Contents';
import HeaderButtonOpen from './__Button/_Open/Header__Button_Open';

import { withRouter } from "react-router";

// Instructions
// : ALL about the menu or header VISIBILITY is controlled ONLY by this.state.menuVisibility. 
class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuVisibility: false,   
        // Control the visibility of Header__Menu as its className (with -100vw);
      headerColor: null,
      location: "/",
      pageChanged: false, 
    }

    this.handleOnClick = this.handleOnClick.bind(this); 
 
  }


  handleOnClick(e) {
    // this.toggleMenuVisibility();
    this.setMenuVisibilityByButton();
    e.stopPropagation();
  }
 

  setHeaderColor() {
    let headerColor = 'black';
    if(this.props.location.pathname === "/") {     
      // When the path is the home. 
      headerColor = 'black';
        // When it is 'black', the color of CONTENTS is 'white' set in setContentsColor().
    } else {
      headerColor = 'white';
    }
    return headerColor;
  }

  setContentsColor() {
    let headerColor = this.setHeaderColor();
    let contentsColor;
    if(headerColor === 'black') {
      contentsColor = 'white';
    } else {
      contentsColor = 'black';
    }
    return contentsColor;
  }

  setMenuVisibilityByButton() {
    this.setState(
      {
        menuVisibility: !this.state.menuVisibility
      }
    );
  }


  render() {
    
    // const {
    //   props: {
    //   }
    
    // } = this;


    // console.log(this.setHeaderColor())

    return (

      <div className="header">
        <div >
          <HeaderContents 
            handleOnClick={this.handleOnClick}
            menuVisibility={this.state.menuVisibility}
            headerColor={this.setHeaderColor()}
            contentsColor={this.setContentsColor()}
            hideHeaderFromPage={this.hideHeaderFromPage}
            // setHideHeaderFromPage={this.setHideHeaderFromPage}
          />
          
        </div>
          {/* All the LAYOUT like Grid go here */}
        <HeaderButtonOpen 
          handleOnClick={this.handleOnClick}
          contentsColor={this.setContentsColor()}
        />
        {/* Absolte to Header Block */}
        
      </div>
    )
  }
}
export default withRouter(Header)

