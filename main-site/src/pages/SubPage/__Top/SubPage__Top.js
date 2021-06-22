import React, { Component } from 'react'
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default class SubPageTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (
      <div className={`sub-page__top sub-page__top_bg sub-page__top_bg_${this.props.bgName}`}>
        <Slide               
          className="sub-page__top_flex-container"
          direction="down" 
          triggerOnce
          style={
            {
              'width': '100%', 
              'height': '100%'
            }
          }
        >
        <div className="sub-page__top_title">
          {this.props.pageTitle}
        </div>

        </Slide>
      </div>
    )
  }
}
