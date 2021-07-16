// Liberaries
import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';
import { motion } from 'framer-motion';


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
      headerColor: null,
      contnetsColor: null,   
    }

    this.trackWindowWidth = this.trackWindowWidth.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this); 
    this.controllScrollingUnderneath = this.controllScrollingUnderneath.bind(this);
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
    // this.controllScrollingUnderneath();
      // Using this fill prevent set overflow: hidden; by this.controllScrollingUnderneath(); being Called from InitialAnimation.     
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
    e && e.stopPropagation();
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


  setHeaderColor() {
    
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


  scrollToTop() {
    window.scrollTo(0, 0);
    
  }

  controllScrollingUnderneath(hide) {
    // Call Sites
    // : componendDidMount()
    // : setSiteMenuMotionIntoViewpoint() 
      //  Which is Called everytime the this.handleOnClick() is Called or everytime Header visibility changes.
        
    // console.log("controllScrollingUnderneath()/above if", hide);


  	// Scroll to the TOP. When the user Refreshed the page MIDWAY a page.
      // P
        // : Placing the screen MIDWAY AFTER the initial animation is wierd. 
    this.scrollToTop()

    // Conditionally set overflow Property to the body Tag. 
    if(window.innerWidth >= 1000 && !hide === true) {
      // console.log("window.innerWidth >= 1000 && !hide === true", document.body);

      document.body.style.overflow = 'unset';   

      // console.log("window.innerWidth >= 1000 && !hide === true", document.body);

    } else {

      if(this.state.siteMenuVisibility || hide === true)  {
          // console.log("this.state.siteMenuVisibility || hide === true/1", document.body);          
          document.body.style.overflow = 'hidden';

          // console.log("this.state.siteMenuVisibility || hide === true/2", document.body);;

      } else if (!this.state.siteMenuVisibility || hide === false) {
          // console.log("!this.state.siteMenuVisibility || hide === false/2", document.body);

          document.body.style.overflow = 'unset';   
          
          // console.log("!this.state.siteMenuVisibility || hide === false/2", document.body);


      }     

    }
    

  }

    // setHeaderHeight() 
    
    setHeaderAnimationStyleVariants(screenSize) {
      // console.log(screenSize)    

      let top;
      let bottom;
      if(this.state.windowWidth <= 1000) {

        top = null
        bottom = 0
      } else {
        top = 0
        bottom = null
      }
      
      return {
        initial: {          
          position: 'fixed',
          top: top,
            // screenSize == 'smallScrees'
            // ? 'auto'
            // : '0',
          bottom: bottom,
            // screenSize == 'smallScreens'
            // ? '0'
            // : 'auto',
          left: '0',
          width: '100vw',			
          height: '100vh',              
          display: 'grid',
          gridTemplate:
          // The ASSIGNMENT of Grid Areas need to be 
            // : The SAME in both state (initial and animate)
            // : The DIFFERENT in different screen sizes. 
            // P
              // : Otherwise, the animation of LAYOUT isn't smooth. 
          screenSize == 'smallScreens' 
          ? "[row1-start] 'reservation main site-menu-button' 100% [row1-end] / 0% 100% 0%"
          : "[row1-start] 'main site-menu reservation' 100% [row1-end] / 100% 0% 0%",
          overflow: 'visible',
        },
        animate: {                      
            height: '15vh',
            gridTemplate:               
              screenSize == 'smallScreens' 
              ? "[row1-start] 'reservation main site-menu-button' 100% [row1-end] / 30% 40% 30%"
              : "[row1-start] 'main site-menu reservation' 100% [row1-end] / 20% 60% 20%",           
          
            transition: {            
            duration: 1.5,
            delay:  
                // Needs to be the least time MORE than the Low Order motion variants in HeaderMain/... 
              screenSize == 'smallScreens' 
              ? 1.7
                // : HeaderMain/.../textContainer variants = 0.1s
                // : HeaderMain/.../motionRect variants = 1.5s
              : 2.0,
                // : HeaderMain/.../textContainer variants = 1.5s
                // : HeaderMain/.../motionRect variants = 1.5s
            ease: [0.87, 0, 0.13, 1],
            }, 
        },              
      }


    }

    setHeaderAnimationStyle() {

      let top;
      let bottom;
      if(this.state.windowWidth <= 1000) {

        top = null
        bottom = 0
      } else {
        top = 0
        bottom = null
      }
      
      return {
        position: 'fixed',
        top: top,
        bottom: bottom,
        left: 0,
        width: '100vw',
        height: '15vh',
        display: 'grid',
        gridTemplate:                           
          this.state.windowWidth <= 1000 
          ? "[row1-start] 'reservation main site-menu-button' 100% [row1-end] / 30% 40% 30%"
          : "[row1-start] 'main site-menu reservation' 100% [row1-end] / 20% 60% 20%",                   
        overflow: 'visible',
      }

    }
      
  

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

    // let top;
    // let bottom;
    // if(this.state.windowWidth <= 1000) {

    //   top = null
    //   bottom = 0
    // } else {
    //   top = 0
    //   bottom = null
    // }
    
    // const headerStyle = {
    //   position: 'fixed',
    //   top: top,
    //     // this.state.windowWidth <= 1000
    //     //       ? ''
    //     //       : '0',
    //   bottom: bottom,
    //     // this.state.windowWidth <= 1000
    //     // ? '0'
    //     // : '',
    //   left: 0,
    //   width: '100vw',
    //   height: '15vh',
    //   display: 'grid',
    //   gridTemplate:                           
    //     this.state.windowWidth <= 1000 
    //     ? "[row1-start] 'reservation main site-menu-button' 100% [row1-end] / 30% 40% 30%"
    //     : "[row1-start] 'main site-menu reservation' 100% [row1-end] / 20% 60% 20%",                   
    //   overflow: 'visible',
    // }

    return (


      <motion.div 
        className=
          {
            `
            header
            header__grid-container 
            header_color_${this.state.headerColor}            
            header_box-shadow_${headerHasBoxShadow}
            `
          }        
          ref={header => this.header = header }

          // Initial Animation
          initial={this.props.isSiteFirstMount ? "initial" : ""}
          animate={this.props.isSiteFirstMount ? "animate" : ""}          
          style={
            this.props.isSiteFirstMount ? "" : this.setHeaderAnimationStyle()    
        }
          variants={this.setHeaderAnimationStyleVariants(this.state.windowWidth <= 1000 ? 'smallScreens' : 'largeScreens')}
          onAnimationStart={() => {

            this.controllScrollingUnderneath(true);
            
          }}
          onAnimationComplete={() => {				
            this.controllScrollingUnderneath(false)								

          }}

      >
      
      
        <div
          className="header__grid-item header-contents__grid-item header__grid-item_main"
        >
          <HeaderMain 
            contentsColor={this.state.contentsColor}
            handleOnClick={this.handleOnClick}
            controllScrollingUnderneath={this.controllScrollingUnderneath}
            isSiteFirstMount={this.props.isSiteFirstMount}
            windowWidth={this.state.windowWidth <= 1000 ? 'smallScreens' : 'largeScreens'}
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
      </motion.div>
    
    )
  }
}

export default withRouter(Header)