import React, { Component } from 'react'


import ScrollingSection from '../../../../blocks/SrollingSection/ScrollingSection';

import { v4 as uuidv4 } from 'uuid';

export default class HomeNewsItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    
  }

  

  render() {

    // this.props.items.map((item)=> {
    //   console.log(item)
    // })
    
    return (
        <div className="home-news__items">
          <ScrollingSection
            stopScrolling={'1000'}
          >
            <div className="home-news__item-container">
              {
                this.props.items.map((item)=> (
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
