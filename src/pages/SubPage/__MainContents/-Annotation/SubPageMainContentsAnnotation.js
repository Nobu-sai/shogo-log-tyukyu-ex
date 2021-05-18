import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class SubpageMainContentsAnnotation extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }


  render() {
    
    // console.log(this.props.annotationList)

    return (
      <div>
        {
          
          this.props.annotationList.map((annotation)=>(
            <div 
              className={`sub-page__main-contents_annotation sub-page__main-contents_${this.props.index}-annotation`}
              key={ `${uuidv4()}+1` }
            >
              {annotation}
            </div>
          ))
        }
      </div>
    )
  }
}
