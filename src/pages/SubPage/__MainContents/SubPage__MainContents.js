import React, { Component } from 'react'

import SubpageMainContentsAnnotation from './-Annotation/SubPageMainContentsAnnotation';

import ScrollingSection from '../../../blocks/SrollingSection/ScrollingSection';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default class SubPageContents extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {

  //  this.props.contents.map((content, index)=>{
  //    index >= 0 && console.log('content index', index);
  //    index >= 0 && console.log('content title', content);
  //  })

    return (
      <div className="sub-page__main-contents">
        <div className="sub-page__main-contents_page-location-section">
          <Link className="link link_color_black sub-page__main-contents_page-location-text" to="/">トップ</Link>
          <div className="sub-page__main-contents_page-location-text sub-page__main-contents_page-location-grater-than"> &#62; </div>
          <Link className="link link_color_black sub-page__main-contents_page-location-text" to={`${this.props.currentPage.link}`}>{this.props.currentPage.name}</Link>
        </div>
        <div className="sub-page__main-contents_intro-text-section">
          <div className="sub-page__main-contents_intro-text">
            {
              this.props.IntroTextList.map((textLine, index)=>(
                <div 
                  className={`sub-page__main-contents_intro-text_line`}
                  key={ uuidv4() }
                >
                  {textLine}
                </div>
              ))
            }
          </div>
        </div>
        <div className="sub-page__main-contents_grid-section">
          <ScrollingSection
            stopScrolling={1000}
          >
            { 
              this.props.gridContents.map((content, index)=>(
                index >= 0 &&
                <div 
                  className={`sub-page__main-contents_grid-container sub-page__main-contents_grid-container_${index}`}
                  key={ uuidv4() }
                > 
                
                    <div className={`sub-page__main-contents_grid-item sub-page__main-contents_${index}-pic sub-page__main-contents_pic sub-page__main-contents_pic_${content.pic}`}>
                    </div>

                    <div className={`sub-page__main-contents_grid-item sub-page__main-contents_grid-bg sub-page__main-contents_desc sub-page__main-contents_${index}-desc`}>
                      <div className={`sub-page__main-contents_desc-item sub-page__main-contents_title sub-page__main-contents_${index}-title`}>
                        {content.title}
                      </div>
                      <div className={`sub-page__main-contents_desc-item sub-page__main-contents_explanation sub-page__main-contents_${index}-explanation`}>
                        {content.explanation}
                      </div>

                      <div className="sub-page__main-contents_desc-item  sub-page__main-contents_annotation-container">
                        {
                          content.annotationList && <SubpageMainContentsAnnotation annotationList={content.annotationList} index={index}/>               
                        }
                      </div>
                      
                    </div>
                    <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area sub-page__main-contents_grid-bg-area-1"></div>
                    <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area sub-page__main-contents_grid-bg-area-2"></div>
                    <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area  sub-page__main-contents_grid-bg-area-3"></div>
                 </div>                           

              ))
            }          


          </ScrollingSection>
        </div>
      </div>
    )
  }
}
