import React, { Component } from 'react'

import $ from 'jquery';

// images
import mainBG01 from '../../../../assets/images/mainbg01.jpg';
import mainBG02 from '../../../../assets/images/mainbg02.jpg';
import mainBG03 from '../../../../assets/images/mainbg03.jpg';


export default class HomeTopMainpicture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      picNum: 0,
      // zoomIn: null,
    }
    // this.changeBGImage = this.changeBGImage.bind(this);
    
  }

  componentDidMount() {
    this.homeTop__MainPictureBG = $('.home-top__main-picture-bg');
    this.homeTop__MainPictureContainer = $('.home-top__main-picture-container');
    this.changeContainerBG();
    this.changeBG();
    this.zoomIn();
    // this.fadeOut();
    setInterval(()=>{
      // this.fadeOut()
      // this.zoomIn();
      this.updatePicNum()
    }, 5000);
      // All the animation needs to be WITHIN the INTERVAL to prevent wierd motion. 
  }

  updatePicNum = () => {
    // this.homeTop__MainPictureBG.css({          
    //   'background-size': '100%'    
    // }); 

    if(this.state.picNum < 2) {

      this.setState({
        picNum: this.state.picNum + 1,
      }, () => {
        console.log(this.state.picNum);
        this.changeContainerBG();
        this.zoomIn()
        // this.changeContainerBG();
        this.fadeOut();
      });

    } else {

      this.setState({
        picNum: 0,
      }, () =>{
        console.log(this.state.picNum);
        this.changeContainerBG();
        this.zoomIn()
        // this.changeContainerBG();
        this.fadeOut();
      })

    }
  }

  changeContainerBG() {
    let images = [mainBG01, mainBG02, mainBG03];  
    this.homeTop__MainPictureContainer.css({ 
      "background-image": `url(${images[this.state.picNum]})`,      
      'background-size': '100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',

    }); 
  }

  fadeOut() {
    // this.changeContainerBG();
    // console.log(this.state.picNum);
    this.homeTop__MainPictureBG.fadeOut(1000, ()=>
    { 
      this.changeBG();
    });        
  }
  


  changeBG() {

    let images = [mainBG01, mainBG02, mainBG03];  
    // console.log(images[this.state.picNum]);
      // source = /static/media/mainbg02.b2b03d11.jpg, etc... 
    this.homeTop__MainPictureBG.css({
      'display': 'block',
        // Offset the Value set by jQuery fadeOut() Method.
      "background-image": `url(${images[this.state.picNum]})`,
      'background-size': '100%',
      'background-position': 'center',
      'background-repeat': 'no-repeat',

    }); 
    // this.fadeIn()
    
  }

  zoomIn() {
    this.homeTop__MainPictureBG.animate({
      'background-size': '105%',
      // Will be turned into '100%' EVERY time the image is changed. 
      // => No worry for the break in timing of zoom and fade out. 
    }, 3000);
    // The same as the speed of setInterval() to call updatePicNum which Calls fadeOut().
    // P
    // : No lag in timing. 
    
  }

  // zoomOut() {
  //     this.homeTop__MainPictureBG.css({
  //       'background-size': '100%',
  //     }); 
  // }

  fadeIn() {
    this.homeTop__MainPictureBG.fadeIn(100, this.fadeOut());        
      // Offset the Value set by jQuery fadeOut() Method.

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
