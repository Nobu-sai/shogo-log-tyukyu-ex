import React, { Component } from 'react'

export default class ScrollingSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    return (
      // CONTAINER-1 > THIS > CHILDREN-PROPS (CONTAINER-2 > SCROLLING-ITEMS)
      // * CONTAINER-1 
        // = Defines 1(the size of the Section OUTSIDE this ScrollingSection) and 2(size of this ScrollingSeciotn with 100% width and height)
      // * CONTAINER-1 =
        // = Desines the height of SCROLLED contnents 
        // = Set Flexbox to this which defines the layout of SCROLLING-iTEMS. 
      <div className="scrolling-section">
        <div className={`scrolling-section__container scrolling-section__container_background-color_${this.props.scrollingSection__Container_BackgroundColor}} scrolling-section__container_stop-scrolling_${this.props.stopScrolling}`}>
          <div className={`scrolling-section__contents`}>
            {this.props.children}
            {/* HTML Elements are sent */}
          </div>
        </div>  
      </div>
    )
  }
}
