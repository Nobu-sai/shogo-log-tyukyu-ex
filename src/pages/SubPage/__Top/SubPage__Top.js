import React, { Component } from 'react'

export default class SubPageTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    return (
      <div className={`sub-page__top sub-page__top_bg sub-page__top_bg_${this.props.bgName}`}>
         <div className="sub-page__top_title">
           {this.props.pageTitle}
         </div>
      </div>
    )
  }
}
