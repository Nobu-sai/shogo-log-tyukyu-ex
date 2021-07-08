// Liberaries
import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';


// Components
import HeaderMain from './__Main/Header__Main';
import HeaderSiteMenu from './__SiteMenu/Header__SiteMenu';
import HeaderReservation from './__Reservation/Header__Reservation';
import HeaderButton from './__Button/Header__Button';


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {                 
      windowWidth: window.innerWidth, 
      siteMenuVisibility: false,   
        // Control the visibility of Header__Menu as its className (with -100vw);
      headerColor: "black",
      contnetsColor: "black",
      location: "/",
      pageChanged: false, 
    }

    this.trackWindowWidth = this.trackWindowWidth.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this); 
    // this.set
  }

  
  componentDidMount() {    
    
    this.$header = $(this.header);
    this.$header.fadeOut(0);

    window.addEventListener('resize', this.trackWindowWidth);    
    
  
    setTimeout(()=>{
      this.$header.fadeIn(1000)
    }, 200)
    
    this.setHeaderColor();
  
  }

  componentDidUpdate() {
    this.controllScrollingUnderneath();
  }

  trackWindowWidth(e) {
    e.preventDefault();

    this.setState({
      windowWidth: window.innerWidth,
    })
    this.controllScrollingUnderneath();

  }


  handleOnClick(e) {
    // this.toggleMenuVisibility();
    this.setSiteMenuMotionIntoViewpoint();
    e.stopPropagation();
  }

  setHeaderColor() {
    let headerColor = 'black';
    if(this.props.location.pathname === "/") {     
      // When the path is the home. 

      this.setState({
        headerColor: 'black',
      }, ()=> this.setContentsColor())
        // When it is 'black', the color of CONTENTS is 'white' set in setContentsColor().

    } else { 

      this.setState({
        headerColor: 'white',
      }, ()=> this.setContentsColor())

    }
    
  }

  setContentsColor() {
  
    let headerColor = this.state.headerColor;
    
    if(headerColor === 'black') {
      this.setState({
        contentsColor: 'white'
      })
      
    } else {
      this.setState({
        contentsColor: 'black'
      })      
    }
    
  }

  setSiteMenuMotionIntoViewpoint() {

    this.setState(
    {
      siteMenuVisibility: !this.state.siteMenuVisibility
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

      if(this.state.siteMenuVisibility) {

          document.body.style.overflow = 'hidden';

      } else {

          document.body.style.overflow = 'unset';   

      } 

    }

  }

  // setSiteMenuVisibility

  render() {


    let siteMenuVisibility = 'hide';
    if (this.state.siteMenuVisibility || this.state.windowWidth >= 1000) {         
      // Since, the change in the State Invokes the render(), I need to assingn the window.innerWidth to the windowWidth State FIRST (trackWindowWidth()). 
      siteMenuVisibility = 'show';      
    } 

    let headerHasBoxShadow = true
    if(siteMenuVisibility === 'show') {
      headerHasBoxShadow = false
    }
    
    return (


      <div 
        className=
          {
            `
            header
            header__grid-container 
            header_${this.state.headerColor}
            header__content-color-${this.state.contentsColor}
            header_box-shadow_${headerHasBoxShadow}
            `
          }        
          ref={header => this.header = header }

      >
      
        <div
          className="header__grid-item header-contents__grid-item header__grid-item_main"
        >
          <HeaderMain 
            contentsColor={this.state.contentsColor}
            handleOnClick={this.handleOnClick}
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_site-menu">          
          <HeaderSiteMenu 
            handleOnClick={this.handleOnClick}
            contentsColor={this.state.contentsColor}
            siteMenuVisibility={siteMenuVisibility} 
            headerColor={this.state.headerColor}
      
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_reservation">
            <HeaderReservation 
              contentsColor={this.state.contentsColor}
              toggleReservationModal={this.props.toggleReservationModal}
            />
        </div>


        {
          this.state.windowWidth <= 1000 &&

          <div 
            className="header__grid-item header__grid-item_site-menu-button"
          >           
              <HeaderButton
                handleOnClick={this.handleOnClick}
                contentsColor={this.state.contentsColor}
              />             
          </div>

        }
      </div>
    
    )
  }
}

export default withRouter(Header)