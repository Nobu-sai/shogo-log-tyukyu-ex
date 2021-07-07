// Instruction: https://www.evernote.com/shard/s350/nl/180370944/3621b729-4cc9-7f1a-7e64-0796db4a1a6f?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Goal%22%20=%20HomeTop%20image%20animation
// Order of execution
  // : componentDidMount() for setting initial bg images 
  // -> Zoom -> Fade out -> CHANGE image -> Zoom -> ...  

import React, { Component } from 'react'

import $ from 'jquery';

import { Fade, Slide } from "react-awesome-reveal";

// images
import mainBG01_800x1000 from '../../../../assets/images/home-top__main-picture/mainbg01-800-1000.jpg';
import mainBG02_800x1000 from '../../../../assets/images/home-top__main-picture/mainbg02-800-1000.jpg';
import mainBG03_800x1000 from '../../../../assets/images/home-top__main-picture/mainbg03-800-1000.jpg';

import mainBG01_1000x1200 from '../../../../assets/images/home-top__main-picture/mainbg01-1000-1200.jpg';
import mainBG02_1000x1200 from '../../../../assets/images/home-top__main-picture/mainbg02-1000-1200.jpg';
import mainBG03_1000x1200 from '../../../../assets/images/home-top__main-picture/mainbg03-1000-1200.jpg';

import mainBG01_1200x1400 from '../../../../assets/images/home-top__main-picture/mainbg01-1200-1400.jpg';
import mainBG02_1200x1400 from '../../../../assets/images/home-top__main-picture/mainbg02-1200-1400.jpg';
import mainBG03_1200x1400 from '../../../../assets/images/home-top__main-picture/mainbg03-1200-1400.jpg';

import mainBG01_1400x1600 from '../../../../assets/images/home-top__main-picture/mainbg01-1400-1600.jpg';
import mainBG02_1400x1600 from '../../../../assets/images/home-top__main-picture/mainbg02-1400-1600.jpg';
import mainBG03_1400x1600 from '../../../../assets/images/home-top__main-picture/mainbg03-1400-1600.jpg';

import mainBG01_2200x1600 from '../../../../assets/images/home-top__main-picture/mainbg01-2200-1600.jpg';
import mainBG02_2200x1600 from '../../../../assets/images/home-top__main-picture/mainbg02-2200-1600.jpg';
import mainBG03_2200x1600 from '../../../../assets/images/home-top__main-picture/mainbg03-2200-1600.jpg';

import mainBG01_4400x3200 from '../../../../assets/images/home-top__main-picture/mainbg01-4400-3200.jpg';
import mainBG02_4400x3200 from '../../../../assets/images/home-top__main-picture/mainbg02-4400-3200.jpg';
import mainBG03_4400x3200 from '../../../../assets/images/home-top__main-picture/mainbg03-4400-3200.jpg';


 
let mainBGList_800x1000 = [mainBG01_800x1000, mainBG02_800x1000, mainBG03_800x1000];    
let mainBGList_1000x1200 = [mainBG01_1000x1200, mainBG02_1000x1200, mainBG03_1000x1200];    
let mainBGList_1200x1400 = [mainBG01_1200x1400, mainBG02_1200x1400, mainBG03_1200x1400];    
let mainBGList_1400x1600 = [mainBG01_1400x1600, mainBG02_1400x1600, mainBG03_1400x1600];    
let mainBGList_2200x1600 = [mainBG01_2200x1600, mainBG02_2200x1600, mainBG03_2200x1600];  
let mainBGList_4400x3200 = [mainBG01_4400x3200, mainBG02_4400x3200, mainBG03_4400x3200];  



export default class HomeTopMainpicture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      picNum: 0,
      windowWidth: window.innerWidth,      

    }

    this.handleResize = this.handleResize.bind(this);
    
  }

  componentDidMount() {
    this.homeTop__MainPictureAboveBG = $('.home-top__main-picture-above-bg');
    this.homeTop__MainPictureBehindBG = $('.home-top__main-picture-behind-bg');
    
    window.addEventListener("resize", this.handleResize);
    // this.setImageList();
    // console.log("windowWidth State from componentDidMount()", this.state.windowWidth);
    this.changeBehindBG();
    this.changeAboveBG(true);
    setInterval(()=>{
      this.updatePicNum()
    }, 5000);
      // All the animation needs to be WITHIN the INTERVAL to prevent wierd motion. 
  }

  
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  } 

  handleResize(e) {    
    this.setState({ windowWidth: window.innerWidth });

  }


  updatePicNum() {

    if(this.state.picNum < 2) {

      this.setState({
        picNum: this.state.picNum + 1,
      }, () => {        
        this.changeBehindBG();      
      });

    } else {
      // When: The LAST image (mainbg03)
      // => Move back to the FIRST image (maingbg01)

      this.setState({
        picNum: 0,
      }, () =>{ 
        this.changeBehindBG();        
      })

    }
  }

  setBGImage() {

    let backgroundImage;

    if(this.state.windowWidth < 600)  {
                                  
      backgroundImage = `url(${mainBGList_800x1000[this.state.picNum]})`     
            
      
      } else if(this.state.windowWidth >= 600 && this.state.windowWidth < 800) {
        
          backgroundImage = `url(${mainBGList_800x1000[this.state.picNum]})`     
        
      } else if(this.state.windowWidth >= 800 && this.state.windowWidth < 1000) {
        
          backgroundImage = `url(${mainBGList_1000x1200[this.state.picNum]})`     
        
      } else if(this.state.windowWidth >= 1000 && this.state.windowWidth < 1200) {
        
          backgroundImage = `url(${mainBGList_1200x1400[this.state.picNum]})`     
        
      } else if(this.state.windowWidth >= 1200 && this.state.windowWidth < 1400) {
        
          backgroundImage = `url(${mainBGList_1400x1600[this.state.picNum]})`     
        
      } else if(this.state.windowWidth >= 1400 && this.state.windowWidth < 2000) { 

          backgroundImage = `url(${mainBGList_2200x1600[this.state.picNum]})`
        
      } else if(this.state.windowWidth >= 2000) {
        
          backgroundImage = `url(${mainBGList_4400x3200[this.state.picNum]})`            
          
    }

    return backgroundImage;

  }

  setBGSize() { 


    let BGSize;
    let BGResize;
    let BGResize_Initial;
    if(this.state.windowWidth < 600) {
      BGSize = '175%';
      BGResize = '180%'
      BGResize_Initial = '185%';
      
      return {BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial};

    } else {
      BGSize = '100%';
      BGResize = '105%'
      BGResize_Initial = '110%';
      
      return {BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial};

    }

  }


  changeBehindBG() {          
            
      this.homeTop__MainPictureBehindBG.css({ 
        "background-image": `${this.setBGImage()}`,
        'background-position': 'center center',
        'background-repeat': 'no-repeat',  
        // 'background-size': '175%',
        'background-size': `${this.setBGSize().BGSize}`, 
      }); 

  }

  changeAboveBG(isInitial) {    

    this.homeTop__MainPictureAboveBG.css({
      'display': 'block',
        // Offset the Value set by jQuery fadeOut() Method.
      'width': '100%',
      'height': '100%',
      "background-image": `${this.setBGImage()}`,
        // Set the background-size Property with % Unit.
        // P
          // : When animating zoom-in with background-size with, %, I need to use %. 
            // Otherwise, the animation starts with 0%.
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': `${this.setBGSize().BGSize}`, 
      
    });    

    this.zoomIn(isInitial);
    
  }


  fadeOut() {
    this.homeTop__MainPictureAboveBG.fadeOut(2000, () =>
    {       
      this.changeAboveBG(false);
    });        

  }

  zoomIn(isInitial) {
    // Setting both of height and width to background-size does NOT work. 
    // => Use width and height.     

    if(isInitial) {

      this.homeTop__MainPictureAboveBG.animate({
        'background-size': `${this.setBGSize().BGResize_Initial}`
      }, 5000);

      this.fadeOut()

    } else {

      this.homeTop__MainPictureAboveBG.animate({
        'background-size': `${this.setBGSize().BGResize}`
      }, 3000);

      this.fadeOut()

    }

        
}
    



  render() {
  
    // console.log(this.state.picNum)

    return (
      <Fade 
        duration={3000} 
        triggerOnce        
        className="home-top__main-picture"
      >

      <div 
        className={`home-top__main-picture-behind-bg home-top__main-picture_flex-container`}
      
      >
        <div 
          className="home-top__main-picture-above-bg"
        >

        </div>

        <div className="home-top__main-picture_flex-item">

        </div>
        <div className="home-top__main-picture_flex-item">
          <Slide direction="down" triggerOnce>
          <div 
            className="home-top__main-picture_text"
            >
            頑張る人の
            <br/>           
            頑張らない時間            
          </div> 
          </Slide>
        </div>

      </div>
      </Fade>
    )
  }
}
