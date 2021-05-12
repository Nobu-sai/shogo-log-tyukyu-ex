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
        <div className="scrolling-section__container">
          <div className="scrolling-section__contents">
            {this.props.children}
            {/* HTML Elements are sent */}
          </div>
        </div>  
      </div>
    )
  }
}
