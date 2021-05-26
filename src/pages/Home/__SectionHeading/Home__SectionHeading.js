import React, { Component } from 'react'
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default class HomeSectionHeading extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="home__section-heading">
        <Slide direction="up" triggerOnce>
        <div className="home__section-heading-logo">
        </div>
        </Slide>

        <Slide direction="up" triggerOnce>
        <div className="home__section-heading-title">
          {this.props.headingTitle}
        </div>
        </Slide>
      </div>
    )
  }
}
