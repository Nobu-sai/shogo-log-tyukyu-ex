import React, { Component } from 'react'


import ScrollingSection from '../../../../blocks/SrollingSection/ScrollingSection';

import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery';

export default class HomeNewItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    
  }


  componentDidMount() {
    this.$HomeNewsItems = $('.home-news__items');
    // this.slideUpContents() 
    // this.slideDownContents()
  }
  
  slideUpContents() {
    this.$HomeNewsItems.slideUp(1000);
  }

  slideDownContents() {
    this.$HomeNewsItems.slideDown(1000);

  }


  render() {

    // console.log(this.props.items)
    
    
    return (
        <div className="home-news__items">
        
          <ScrollingSection
            stopScrolling={'1000'}
          >
            <div className="home-news__item-container">
              {
                this.props.items.contents.map((item)=> (
                <div 
                  className="home-news__item" 
                  key={uuidv4()}
                >
                  <div className={`home-news__item-pic home-news__item-pic_${item.pic}`}>

                  </div>
                  <div className="home-news__item-contents">
                    <div className="home-news__item-date">
                      {item.date}
                    </div>
                    <div className="home-news__item-text">
                      {item.text}
                    </div>
                  </div>
                </div>

                ))
              }
              
            </div>
          </ScrollingSection>
        </div>
    )
  }
}
