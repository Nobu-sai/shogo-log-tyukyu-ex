import React, { Component } from 'react'

import HeaderContents from './__Contents/Header__Contents';
import HeaderButtonOpen from './__Button/_Open/Header__Button_Open';

import { withRouter } from "react-router";

// Instructions
// : ALL about the menu or header VISIBILITY is controlled ONLY by this.state.menuVisibility. 
// : In 1000px - screen width, the Header is set opened in Header__Contents.js. 
  // : If the user 1(open the header in small screen), 2(enlarge the screen)
  // -> The screen can NOT be scrolled.
    // => I need to set 'unset' for overflow Proeprty when the Header is shown by DEFAULT. 
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

    this.handleResize = this.handleResize.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this); 
    // this.setMenuVisibility = this.setMenuVisibilitz/z/y.bind(this);
 
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);    
  }

  handleResize(e) {
    e.preventDefault();
    this.controllScrollingUnderneath();
  }


  handleOnClick(e) {
    // this.toggleMenuVisibility();
    this.setMenuMotionIntoViewpoint();
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

  setMenuMotionIntoViewpoint() {

    this.setState(
    {
      menuVisibility: !this.state.menuVisibility
    }
  , () => {
      this.controllScrollingUnderneath();
    }
  
    )

  
  }

  controllScrollingUnderneath() {
        
    if(window.innerWidth >= 1000) {

      document.body.style.overflow = 'unset';   

    } else {

      if(this.state.menuVisibility) {

          document.body.style.overflow = 'hidden';

      } else {

          document.body.style.overflow = 'unset';   

      } 

    }

  }


  render() {    

    return (

      <div className="header">
        <div >
          <HeaderContents 
            handleOnClick={this.handleOnClick}
            setMenuVisibility={this.setMenuVisibility}
            menuVisibility={this.state.menuVisibility}
            headerColor={this.setHeaderColor()}
            contentsColor={this.setContentsColor()}
            hideHeaderFromPage={this.hideHeaderFromPage}
            toggleReservationModal={this.props.toggleReservationModal}
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

