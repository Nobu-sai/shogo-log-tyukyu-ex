import React, { Component } from 'react'

export default class ScrollingSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    return (
      <div className="scrolling-section">
        <div className={`scrolling-section__container scrolling-section__container_background-color_${this.props.scrollingSection__Container_BackgroundColor}} scrolling-section__container_stop-scrolling_${this.props.stopScrolling}`}>
          <div className={`scrolling-section__contents scrolling-section__contents_stop-scrolling_${this.props.stopScrolling}`}>
            {this.props.children}
            {/* HTML Elements are sent */}
          </div>
        </div>  
      </div>
    )
  }
}
