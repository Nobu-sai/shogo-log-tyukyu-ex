import React, { Component } from 'react'

export default class SubpageMainContentsExplanation extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    
  }

  render() {
    return (
      <div className={`sub-page__main-contents_desc-item sub-page__main-contents_explanation sub-page__main-contents_${this.props.index}-explanation`}>
        {this.props.explanationList.map((explanation)=>(
          <div className="sub-page__main-contents_explanation-text-line">
            {explanation}
          </div>
        ))}
      </div>
    )
  }
}
