// Liberaries
import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';

// Components
import HeaderMain from './__Main/Header__Main';
import HeaderSiteMenu from './__SiteMenu/Header__SiteMenu';
import HeaderReservation from './__Reservation/Header__Reservation';
import HeaderButtonOpen from './__Button/_Open/Header__Button_Open';
import HeaderButtonClose from './__Button/_Close/Header__Button_Close';

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
    this.$headerContents = $(this.headerContents);
    this.$headerContents.fadeOut(0);

    window.addEventListener('resize', this.trackWindowWidth);    
    
  
    setTimeout(()=>{
      this.$headerContents.fadeIn(1000)
    }, 200)
    
    this.setHeaderColor();
  
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

      if(this.state.menuVisibility) {

          document.body.style.overflow = 'hidden';

      } else {

          document.body.style.overflow = 'unset';   

      } 

    }

  }

  render() {


    let siteMenuVisibility = 'hide';
    if (this.state.siteMenuVisibility || this.state.windowWidth >= 1000) {         
      // Since, the change in the State Invokes the render(), I need to assingn the window.innerWidth to the windowWidth State FIRST (trackWindowWidth()). 
      siteMenuVisibility = 'show';      
    } 
    
    console.log(siteMenuVisibility);

    return (

      <div 
        className=
          {
            `
            header__contents 
            header__contents_grid-container 
            header__contents_${this.state.headerColor}
            header__contents_content-color-${this.state.contentsColor}
            `
          }        
          ref={headerContents => this.headerContents = headerContents}

      >
      
        <div
          className="header__contents_grid-item header-contents__grid-item header__contents_main"
          onClick={this.handleOnClick}
        >
          <HeaderMain 
            contentsColor={this.state.contentsColor}
          />
        </div>

        <div 
          className="header__contents_grid-item header__contents_site-menu">          
          <HeaderSiteMenu 
            handleOnClick={this.handleOnClick}
            contentsColor={this.state.contentsColor}
            siteMenuVisibility={'show'} 
            headerColor={this.state.headerColor}
      
          />
        </div>

        <div 
          className="header__contents_grid-item header__contents_reservation">
            <HeaderReservation 
              contentsColor={this.state.contentsColor}
              toggleReservationModal={this.props.toggleReservationModal}
            />
        </div>


        <div 
          className="header__contents_grid-item header__contents_site-menu-button">
            { 
              siteMenuVisibility === 'hide' ? ( 
                <HeaderButtonOpen 
                  handleOnClick={this.handleOnClick}
                  contentsColor={this.state.contentsColor}
                />
              ) : (
                <HeaderButtonClose 
                  handleOnClick={this.handleOnClick}
                  contentsColor={this.state.contentsColor}
                />
              )
            }
        </div>

      </div>
    )
  }
}

export default withRouter(Header)