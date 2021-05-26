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
      slide: 'up',
      windowWidth: window.innerWidth,      
    }

  }

  
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);    
    this.$headerContents = $(this.headerContents);
    this.$headerContents.fadeOut(0);
    // this.setState({
    //   slide: 'down',
    // }, this.slideHeaderContents())    
    setTimeout(()=>{
      this.$headerContents.fadeIn(1000)
    }, 200)
  }
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  

  
  render() {


    // const {
    //   props: {
    //   }
    
    // } = this;

    let menuVisibility = "hide";
    if (this.props.menuVisibility || this.state.windowWidth >= 1000) {
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