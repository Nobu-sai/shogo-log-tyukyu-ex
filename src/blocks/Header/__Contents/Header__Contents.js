// Liberaries
import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';

// Components
import HeaderMain from '../__Main/Header__Main';
import HeaderMenu from '../__Menu/Header__Menu';
import HeaderReservation from '../__Reservation/Header__Reservation';
import HeaderButtonClose from '../__Button/_Close/Header__Button_Close';

class HeaderContents extends Component {
  constructor(props) {
    super(props)

    this.state = {                 
      windowWidth: window.innerWidth, 
    }

    this.trackWindowWidth = this.trackWindowWidth.bind(this);
  }

  
  componentDidMount() {    
    this.$headerContents = $(this.headerContents);
    this.$headerContents.fadeOut(0);

    

    window.addEventListener('resize', this.trackWindowWidth);    
    
  
    setTimeout(()=>{
      this.$headerContents.fadeIn(1000)
    }, 200)
    

  }

  trackWindowWidth(e) {

    this.setState({
      windowWidth: window.innerWidth,
    })
  }
  
  render() {


    let menuVisibility = "hide";
    if (this.props.menuVisibility || this.state.windowWidth >= 1000) {         
      // Since, the change in the State Invokes the render(), I need to assingn the window.innerWidth to the windowWidth State FIRST (trackWindowWidth()). 
      menuVisibility = "show";      
    } 
    

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
          ref={headerContents => this.headerContents = headerContents}

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
            <HeaderReservation 
              contentsColor={this.props.contentsColor}
              hideHeaderFromPage={this.props.hideHeaderFromPage}
              toggleReservationModal={this.props.toggleReservationModal}
            />
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