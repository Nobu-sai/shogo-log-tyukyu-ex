// Liberaries
import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from 'jquery';
import { motion } from 'framer-motion';


// Components
import HeaderTitle from './__Title/HeaderTitle';
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
      // headerColor: null,
      // headerColor: this.setHeaderColor,
      // contnetsColor: null,   
      // Use State for headerColor and contentsColor for now. 
        //  P
          // : When I use a normal Variables under render(), the values are NOT accessible in HeaderTitle and classNames. 
    }
    // Fnctionalities
    this.trackWindowWidth = this.trackWindowWidth.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this); 
    this.controllScrollingUnderneath = this.controllScrollingUnderneath.bind(this);
    // Styles
    this.setHeaderColor = this.setHeaderColor.bind(this);
    this.setContentsColor = this.setContentsColor.bind(this);
    this.setHeaderStyle = this.setHeaderStyle.bind(this);
  }

  
  componentDidMount() {    
    
    this.$header = $(this.header);
    this.$header.fadeOut(0);

    window.addEventListener('resize', this.trackWindowWidth);    
    
  
    setTimeout(()=>{
      this.$header.fadeIn(1000)
    }, 200)
    
    // this.setHeaderColor();
      
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


    

    setHeaderColor() {
      
      // if(this.props.location.pathname === "/") {     
      //   // When the path is the home. 

      //   this.setState({
      //     headerColor: 'black',
      //   }, ()=> this.setContentsColor())
      //     // When it is 'black', the color of CONTENTS is 'white' set in setContentsColor().

      // } else { 

      //   this.setState({
      //     headerColor: 'white',
      //   }, ()=> this.setContentsColor())

      // }

      let headerColor;

      if(this.props.location.pathname === "/") {     
        // When the path is the home.  
          return headerColor = 'black'
      } else {   
          return headerColor = 'white'
      }
      
    }

    setContentsColor() {
    
      let contentsColor;
      // let headerColor = this.state.headerColor;
      let headerColor = this.setHeaderColor();
      console.log(headerColor)
      
      if(headerColor === 'black') {
        // this.setState({
        //   contentsColor: 'white'
        // })
        return contentsColor = 'white'
        
      } else {
        // this.setState({
        //   contentsColor: 'black'
        // })      
        return contentsColor = 'black'
      }

      // return contentsColor;
      
    }


    setHeaderStyle(screenSize) {

      let top;
      let bottom;      
        // headerColor State is unavailable in my current codes.
          // This is because, 
      if(screenSize == 'smallScreens') {

        top = null
        bottom = 0
      } else if (screenSize == 'largeScreens' || screenSize == 'largeScreensExtra') {
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
        backgroundColor: this.setHeaderColor(),  
        display: 'grid',
        gridTemplate:                           
          this.state.windowWidth <= 1000 
          ? "[row1-start] 'reservation title site-menu-button' 100% [row1-end] / 30% 40% 30%"
          : "[row1-start] 'title site-menu reservation' 100% [row1-end] / 20% 60% 20%",                   
        overflow: 'visible',
      }

    }
      
  
    
    setHeaderAnimationStyleVariants(screenSize) {
      // console.log(screenSize)    

      return {
        initial: {          
                              	
          height: '100vh',   
                              
          gridTemplate:
          // The ASSIGNMENT of Grid Areas need to be 
            // : The SAME in both state (initial and animate)
            // : The DIFFERENT in different screen sizes. 
            // P
              // : Otherwise, the animation of LAYOUT isn't smooth. 
          screenSize == 'smallScreens' 
          ? "[row1-start] 'reservation title site-menu-button' 100% [row1-end] / 0% 100% 0%"
          : "[row1-start] 'title site-menu reservation' 100% [row1-end] / 100% 0% 0%",
          overflow: 'visible',
        },
        animate: {                      
            height: '15vh',
            gridTemplate:               
              screenSize == 'smallScreens' 
              ? "[row1-start] 'reservation title site-menu-button' 100% [row1-end] / 30% 40% 30%"
              : "[row1-start] 'title site-menu reservation' 100% [row1-end] / 20% 60% 20%",           
          
            transition: {            
            duration: 1.5,
            delay: 3.5,
              // smallScreens
                // : HeaderMain/.../setInitialAnimationBGVariants = 0.1s
                // : HeaderMain/.../setTextContainerVariants = 1.5s
                // : X HeaderMain/.../setMotionRectVariants = 2.5s
                  //  * NOT set "afterChild"
                // : HeaderMain/.../setTextVariants = 1.0s 
                // largeScreens & largeScreensExtra
                  // : HeaderMain/.../setInitialAnimationBGVariants = 1.0s
                  // : HeaderMain/.../setTextContainerVariants = 1.5s
                  // : X HeaderMain/.../setMotionRectVariants = 1.5s
                    //  * NOT set "afterChild"
                  // : HeaderMain/.../setTextVariants = 1.0s
            ease:  
              [0.87, 0, 0.13, 1],
            }, 
        },              
      }


    }


  render() {

    let siteMenuVisibility = 'hide'
    let headerHasBoxShadow = true
    let screenSize;
  

    if (this.state.siteMenuVisibility || this.state.windowWidth >= 1000) {         
      // Since, the change in the State Invokes the render(), I need to assingn the window.innerWidth to the windowWidth State FIRST (trackWindowWidth()). 
      siteMenuVisibility = 'show';      
    } 

    if(siteMenuVisibility === 'show') {
      headerHasBoxShadow = false
    }
        
    if(this.state.windowWidth < 1000)  {
      screenSize = 'smallScreens'

    } else if (this.state.windowWidth < 2000) {
      screenSize =  'largeScreens'

    } else if (this.state.windowWidth > 2000) {
      screenSize = 'largeScreensExtra'
    }


    return (


      <motion.div 
        className=
          {
            `
            header
            header__grid-container 
            header_box-shadow_${headerHasBoxShadow}
            `
          }        
            // header_color_${this.state.headerColor}            
            // header_color_${headerColor}            
          ref={header => this.header = header }

          // Initial Animation
          initial={this.props.isSiteFirstMount ? "initial" : ""}
          animate={this.props.isSiteFirstMount ? "animate" : ""}          
          style={this.setHeaderStyle(screenSize)}
          variants={this.setHeaderAnimationStyleVariants(screenSize)}
          onAnimationStart={() => {

            this.controllScrollingUnderneath(true);
            
          }}
          onAnimationComplete={() => {				
            this.controllScrollingUnderneath(false)								

          }}

      >
      
      
        <div
          className="header__grid-item header-contents__grid-item header__grid-item_title"
        >
          <HeaderTitle
            // contentsColor={this.setContentsColor()}            
            setContentsColor={this.setContentsColor}            
            headerColor={this.setHeaderColor()}            
            handleOnClick={this.handleOnClick}
            controllScrollingUnderneath={this.controllScrollingUnderneath}
            isSiteFirstMount={this.props.isSiteFirstMount}
            screenSize={screenSize}
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_site-menu">          
          <HeaderSiteMenu 
            handleOnClick={this.handleOnClick}
            contentsColor={this.setContentsColor}
            siteMenuVisibility={siteMenuVisibility} 
            headerColor={this.state.headerColor}
      
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_reservation">
            <HeaderReservation 
              contentsColor={this.setContentsColor}
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
                contentsColor={this.setContentsColor}
              />             
          </div>

        }
      </motion.div>
    
    )
  }
}

export default withRouter(Header)