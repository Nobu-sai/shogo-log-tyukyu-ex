// Instruction: https://www.evernote.com/shard/s350/nl/180370944/3621b729-4cc9-7f1a-7e64-0796db4a1a6f?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Goal%22%20=%20HomeTop%20image%20animation


import React, { Component } from 'react'

import $ from 'jquery';

// images
import mainBG01 from '../../../../assets/images/mainbg01.jpg';
import mainBG02 from '../../../../assets/images/mainbg02.jpg';
import mainBG03 from '../../../../assets/images/mainbg03.jpg';


let images = [mainBG01, mainBG02, mainBG03];  

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
    window.addEventListener("resize", this.handleResize);
    this.homeTop__MainPictureBG = $('.home-top__main-picture-bg');
    this.homeTop__MainPictureContainer = $('.home-top__main-picture-container');
    this.changeContainerBG();
    this.changeBG(true);
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
    // console.log(this.state.windowWidth);
  }

  updatePicNum() {

    if(this.state.picNum < 2) {

      this.setState({
        picNum: this.state.picNum + 1,
      }, () => {
        // console.log(this.state.picNum);
        this.changeContainerBG();
        this.fadeOut();
      });

    } else {

      this.setState({
        picNum: 0,
      }, () =>{
        // console.log(this.state.picNum);
        this.changeContainerBG();
        this.fadeOut();
      })

    }
  }

  changeContainerBG() {
    this.homeTop__MainPictureContainer.css({ 
      // 'width': '100vw',
      // 'height': '100vh',
      "background-image": `url(${images[this.state.picNum]})`,      
      'background-size': '120%',
      // 'background-size': 'cover',
      // 'background-size': '150% 150%',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',

    }); 
  }

  fadeOut() {
    this.homeTop__MainPictureBG.fadeOut(2000, ()=>
    { 
      this.changeBG();
    });        
  }
  


  changeBG(isInitial) {
    // console.log(images[this.state.picNum]);
      // source = /static/media/mainbg02.b2b03d11.jpg, etc... 
    this.homeTop__MainPictureBG.css({
      'display': 'block',
        // Offset the Value set by jQuery fadeOut() Method.
      'width': '100%',
      'height': '100%',
      "background-image": `url(${images[this.state.picNum]})`,
      'background-size': '120%',
        // When animating zoom-in with background-size with, %, I need to use %. 
        // Otherwise, the animation starts with 0%.
      'background-position': 'center center',
      'background-repeat': 'no-repeat',

    });     
    this.zoomIn(isInitial)    
    
  }

  zoomIn(isInitial) {
    // Setting both of height and width to background-size does NOT work. 
    // => Use width and height. 

    if(isInitial) {
      this.homeTop__MainPictureBG.animate({
        'background-size': '130%',
      }, 5000);

    } else {
      this.homeTop__MainPictureBG.animate({
        'background-size': '125%',
      }, 3000);

    }
    
    
  }



  render() {
  
    // console.log(this.state.picNum)

    return (
      <div className={`home-top__main-picture-container home-top__main-picture_flex-container`}>
        <div className="home-top__main-picture-bg">

        </div>

        <div className="home-top__main-picture_flex-item">

        </div>
        <div className="home-top__main-picture_flex-item">
          <div className="home-top__main-picture_text">
            頑張る人の
            <br/>           
            頑張らない時間            
          </div> 
        </div>

      </div>
    )
  }
}
