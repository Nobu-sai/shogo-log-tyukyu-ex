// Instruction: https://www.evernote.com/shard/s350/nl/180370944/3621b729-4cc9-7f1a-7e64-0796db4a1a6f?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Goal%22%20=%20HomeTop%20image%20animation


import React, { Component } from 'react'

import $ from 'jquery';

// images
import mainBG01_400x600 from '../../../../assets/images/mainbg01-400-600.jpg';
import mainBG02_400x600 from '../../../../assets/images/mainbg02-400-600.jpg';
import mainBG03_400x600 from '../../../../assets/images/mainbg03-400-600.jpg';

import mainBG01_1200x800 from '../../../../assets/images/mainbg01-1200-800.jpg';
import mainBG02_1200x800 from '../../../../assets/images/mainbg02-1200-800.jpg';
import mainBG03_1200x800 from '../../../../assets/images/mainbg03-1200-800.jpg';

import mainBG01_2200x1600 from '../../../../assets/images/mainbg01-2200-1600.jpg';
import mainBG02_2200x1600 from '../../../../assets/images/mainbg02-2200-1600.jpg';
import mainBG03_2200x1600 from '../../../../assets/images/mainbg03-2200-1600.jpg';

import mainBG01_4400x3200 from '../../../../assets/images/mainbg01-4400-3200.jpg'
import mainBG02_4400x3200 from '../../../../assets/images/mainbg02-4400-3200.jpg'
import mainBG03_4400x3200 from '../../../../assets/images/mainbg03-4400-3200.jpg'

let mainBGList_400x600 = [mainBG01_400x600, mainBG02_400x600, mainBG03_400x600];    
let mainBGList_1200x800 = [mainBG01_1200x800, mainBG02_1200x800, mainBG03_1200x800];    
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
    this.homeTop__MainPictureBG = $('.home-top__main-picture-bg');
    this.homeTop__MainPictureContainer = $('.home-top__main-picture-container');
    
    window.addEventListener("resize", this.handleResize);
    // this.setImageList();
    // console.log("windowWidth State from componentDidMount()", this.state.windowWidth);
    this.changeContainerBG();
    this.changeBG(true);
    // this.zoomIn(true)
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
    console.log(this.state.windowWidth);

    // this.setImageList()
  }

  // setImageList() {
  //   let imageList;

  //   let mainBGList_2200x1600 = [mainBG01_2200x1600, mainBG02_2200x1600, mainBG03_2200x1600];  
  //   let mainBGList_800x800 = [mainBG01_800x800, mainBG02_800x800, mainBG03_800x800];  
    
  //   if(this.state.windowWidth < 500) {
  //     // this.setState({
  //     //   imageList: mainBGList_800x800,
  //     // })
  //     return imageList = mainBGList_800x800;
  //   } if (this.state.windowWidth < 2000) {
  //     // this.setState({
  //     //   imageList: mainBGList_2200x1600,
  //     // })
  //     return imageList = mainBGList_2200x1600;
  //   }

  // }

  // setBGSize() { 


  //   let BGSize;
  //   let BGResize;
  //   let BGResize_Initial;
  //   if(this.state.windowWidth < 500) {
  //     BGSize = '200%';
  //     BGResize = '205%'
  //     BGResize_Initial = '210%';
  //     // console.log({BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial})
  //     return {BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial};

  //   } else {
  //     BGSize = '100%';
  //     BGResize = '155%'
  //     BGResize_Initial = '160%';
  //     // console.log({BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial})
  //     return {BGSize: BGSize, BGResize :BGResize, BGResize_Initial: BGResize_Initial};

  //   }

  // }

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
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': '100%',
      }); 

    if(this.state.windowWidth < 400)  {
      this.homeTop__MainPictureContainer.css({ 
        "background-image": `url(${mainBGList_400x600[this.state.picNum]})`,      
      }); 
    } else if(this.state.windowWidth >= 400 && this.state.windowWidth < 1400) {
      this.homeTop__MainPictureContainer.css({ 
        "background-image": `url(${mainBGList_1200x800[this.state.picNum]})`,      
      }) 
    } else if(this.state.windowWidth >= 1400 && this.state.windowWidth < 2000) {
      this.homeTop__MainPictureContainer.css({ 
        "background-image": `url(${mainBGList_2200x1600[this.state.picNum]})`,      
      }); 
    // } else {
    } else if(this.state.windowWidth >= 2000) {
      this.homeTop__MainPictureContainer.css({ 
        "background-image": `url(${mainBGList_4400x3200[this.state.picNum]})`,       
      }); 
    }
  }

  fadeOut() {
    this.homeTop__MainPictureBG.fadeOut(2000, () =>
    { 
      this.changeBG(false);
    });        

  }
  


  changeBG(isInitial) {    
    let backgroundImage; 

    if(this.state.windowWidth < 400)  {
      backgroundImage = `url(${mainBGList_400x600[this.state.picNum]})`; 
    } else if(this.state.windowWidth >= 400 && this.state.windowWidth < 1400) {
      backgroundImage = `url(${mainBGList_1200x800[this.state.picNum]})`; 
    } else if(this.state.windowWidth >= 1400 && this.state.windowWidth < 2000) {
      backgroundImage = `url(${mainBGList_2200x1600[this.state.picNum]})`; 
    } else if(this.state.windowWidth >= 2000) {
      backgroundImage = `url(${mainBGList_4400x3200[this.state.picNum]})`; 
    }
      
    this.homeTop__MainPictureBG.css({
      'display': 'block',
        // Offset the Value set by jQuery fadeOut() Method.
      'width': '100%',
      'height': '100%',
      // "background-image": `url(${this.setImageList[this.state.picNum]})`,
        // When animating zoom-in with background-size with, %, I need to use %. 
        // Otherwise, the animation starts with 0%.
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
    
      "background-image": `${backgroundImage}`,      
      'background-size': '100%',

    });     

    this.zoomIn(isInitial);
    
  }

  zoomIn(isInitial) {
    // Setting both of height and width to background-size does NOT work. 
    // => Use width and height. 

    // console.log(isInitial);
    // console.log(this.homeTop__MainPictureBG);

    if(isInitial) {
        this.homeTop__MainPictureBG.animate({
          'background-size':  '110%',
        }, 5000);
    } else {
        this.homeTop__MainPictureBG.animate({
          'background-size': '105%',
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
