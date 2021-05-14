import React, { Component } from 'react'

export default class HomeSectionHeading extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="home__section-heading">
        <div className="home__section-heading-logo">

        </div>
        <div className="home__section-heading-title">
          {this.props.headingTitle}
        </div>
      </div>
    )
  }
}
