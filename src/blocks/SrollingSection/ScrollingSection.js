import React, { Component } from 'react'

export default class Scrollingection extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    return (
      <div className="scrolling-section">
        <div className={`scrolling-section__container scrolling-section__container_background-color_${this.props.scrollingSection__Container_BackgroundColor}}`}>
          <div className="scrolling-section__contents">
            {this.props.children}
            {/* HTML Elements are sent */}
          </div>
        </div>  
      </div>
    )
  }
}
