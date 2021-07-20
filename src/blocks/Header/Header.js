// Usage
// : ALL Style for Header ITSELF (Ex: Header itself Styles, Grid Layout) HERE.
  // * The CHILDREN Components are different (Ex: HeaderSiteMenu) except to HeaderTitle.




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
    this.scrollToTop = this.scrollToTop.bind(this)
    // Styles
    this.setHeaderColor = this.setHeaderColor.bind(this);
    this.setContentsColor = this.setContentsColor.bind(this);
    this.setHeaderStyle = this.setHeaderStyle.bind(this);
    this.setHeaderAnimationStyleVariants = this.setHeaderAnimationStyleVariants.bind(this)
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


  handleOnClick(e, doesNotShowMenu) {
    // this.toggleMenuVisibility();
    this.setSiteMenuMotionIntoViewpoint(doesNotShowMenu);
    e && e.stopPropagation();
  }

  
  setSiteMenuMotionIntoViewpoint(doesNotShowMenu) {

    if(!doesNotShowMenu) {
      this.setState(
      {
        siteMenuVisibility: !this.state.siteMenuVisibility
      }
    , () => {
        this.controllScrollingUnderneath();
      }
    
      )


    }
  
  }

  
  // Scroll to the TOP of each page. 
  scrollToTop() {
    // console.log("Will scroll")
    window.scrollTo(0, 0);    
  }

  // Control the overflow of page or body Tag using.
  controllScrollingUnderneath(hide) {
    // Call Sites
    // : componendDidMount()
    // : setSiteMenuMotionIntoViewpoint() 
      //  Which is Called everytime the this.handleOnClick() is Called or everytime Header visibility changes.
        
    // console.log("controllScrollingUnderneath()/above if", hide);


    // Conditionally set overflow Property to the body Tag. 
    // Usage
      // Use || to evaluate if the !hide === true
        // P
        // : The ESCAP hatch for I EXPLICITLY control the body Tag scrolling. 
        // : Otherwise, (using &&) I need to pass the hide Param from EVERYWHARE. 
    if(window.innerWidth >= 1000 || !hide === true) {      
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


    setHeaderStyle(screenSize, headerHasBoxShadow) {

      let top;
      let bottom
      
        // headerColor State is unavailable in my current codes.
          // This is because, 
      let boxShadow

      if (headerHasBoxShadow == false) {
        boxShadow = 'none'
      // } else if (headerHasBoxShadow == true && this.setHeaderColor() == 'black') {
      } else if (headerHasBoxShadow) {
        boxShadow = "4px 4px 24px 14px hsla(0, 0%, 0%, 0.9)"   
        // console.log(boxShadow)     
      // } else if (headerHasBoxShadow == true && this.setHeaderColor() == 'white') {
      //   boxShadow = "4px 4px 24px 14px hsla(0, 0%, 100%, 0.9)"        
        // console.log(boxShadow)     
      } 

      if(screenSize == 'smallScreens') {

        top = null
        bottom = 0        

      } else if (screenSize == 'largeScreens' || screenSize == 'largeScreensExtra') {

        top = 0
        bottom = null

      }

      
      return {
        zIndex: 1001,
        position: 'fixed',
        top: top,
        bottom: bottom,
        left: 0,
        boxShadow: boxShadow,
        margin: 'auto',
        width: '100vw',
        height: '15vh',      
        backgroundColor: this.setHeaderColor(),  
          // Don't change. 
            // P
              // : "This & Header/setHeaderAnimationStyleVariants()/animate Prop" would be making the BG FADE IN with animation. 
        display: 'grid',
        gridTemplate:                           
          screenSize == 'smallScreens'
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
            height: 
              '15vh',

            gridTemplate:               
              screenSize == 'smallScreens' 
              ? "[row1-start] 'reservation title site-menu-button' 100% [row1-end] / 30% 40% 30%"
              : "[row1-start] 'title site-menu reservation' 100% [row1-end] / 20% 60% 20%",           
          
            transition: {            
            duration: 2.5,
            delay: 4.0,
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
    // let headerHasBoxShadow = true
    let screenSize
    let headerHasBoxShadow = true;
  

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
            `
          }        
            // header_color_${this.state.headerColor}            
            // header_color_${headerColor}            
          ref={header => this.header = header }

          // Initial Animation
          initial={this.props.isSiteFirstMount ? "initial" : ""}
          animate={this.props.isSiteFirstMount ? "animate" : ""}          
          style={this.setHeaderStyle(screenSize, headerHasBoxShadow)}
          variants={this.setHeaderAnimationStyleVariants(screenSize)}
          onAnimationStart={() => { 
            this.controllScrollingUnderneath(true);             
            
          }}
          onAnimationComplete={() => {				 
            this.controllScrollingUnderneath(false)								

          }}

          onUpdate={
            () => {				
              this.scrollToTop()     
              // : Scroll to the TOP. When the user Refreshed the page MIDWAY a page.
                // P
                  // : Placing the screen MIDWAY AFTER the initial animation is wierd. 
              // : Scroll to the top of the page BEFORE the animation ends
                // => NOT in onAnimatiionComplete             
            }
          }

      >
      
      
        <div
          className="header__grid-item header-contents__grid-item header__grid-item_title"                    
          style={{
            gridArea: 'title',            
            // overflow: 'hidden',
          }}

        >
          <HeaderTitle
            contentsColor={this.setContentsColor()}                        
            headerColor={this.setHeaderColor()}            
            handleOnClick={this.handleOnClick}
            controllScrollingUnderneath={this.controllScrollingUnderneath}
            isSiteFirstMount={this.props.isSiteFirstMount}
            screenSize={screenSize}      
            boxShadow={this.setHeaderStyle().boxShadow}      
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_site-menu"          
          style={{
            gridArea: 'site-menu',            
            overflow: 'hidden',
          }}
        
        >          
          <HeaderSiteMenu 
            handleOnClick={this.handleOnClick}            
            siteMenuVisibility={siteMenuVisibility}  
            headerColor={this.setHeaderColor()}        
            contentsColor={this.setContentsColor()}                        
      
          />
        </div>

        <div 
          className="header__grid-item header__grid-item_reservation" 
          style={{
            gridArea: 'reservation',
            overflow: 'hidden',
          }}
          
        >
            <HeaderReservation 
              toggleReservationModal={this.props.toggleReservationModal}
              headerColor={this.setHeaderColor()}        
              contentsColor={this.setContentsColor()}                        
            />
        </div>


        {
          this.state.windowWidth <= 1000 &&

          <div 
            className="header__grid-item header__grid-item_site-menu-button"         
            style={{
              gridArea: 'site-menu-button',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >           
              <HeaderButton
                handleOnClick={this.handleOnClick}
                headerColor={this.setHeaderColor()}        
                contentsColor={this.setContentsColor()}                        
              />             
          </div>

        }
      </motion.div>
    
    )
  }
}

export default withRouter(Header)