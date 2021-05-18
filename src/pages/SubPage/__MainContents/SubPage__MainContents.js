import React, { Component } from 'react'

import SubpageMainContentsAnnotation from './_Annotation/SubPageMainContentsAnnotation';

import ScrollingSection from '../../../blocks/SrollingSection/ScrollingSection';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SubpageMainContentsExplanation from './-Explanation/SubPage__MainContents_Explanation';

export default class SubPageMainContents extends Component {
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
          <Link className="link link_color_black sub-page__main-contents_page-location-text" to={`${this.props.currentPage.link}`}>{this.props.pageTitle}</Link>
        </div>
        <div className="sub-page__main-contents_intro-text-section">
          <div className="sub-page__main-contents_intro-text">
            {
              this.props.IntroTextList.map((textLine, index)=>(
                <div 
                  className={`sub-page__main-contents_intro-text_line sub-page__main-contents_intro-text_line_${this.props.currentPage.name}_${index}`}
                  key={ uuidv4() }
                >
                  {textLine}
                </div>
              ))
            }
          </div>
        </div>
        <div className={`sub-page__main-contents_grid-section sub-page__main-contents_grid-section_${this.props.gridContentNumber}-contents`}>
          <ScrollingSection
            stopScrolling={1000}            
          >
            <div className="sub-page__main-contents_grid-container_scroll">
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
                        <div className={`sub-page__main-contents_desc-item sub-page__main-contents_explanation-container`}>
                          <SubpageMainContentsExplanation index={index} explanationList={content.explanationList}/>
                        </div>

                        { content.annotationList ? (
                          <div className="sub-page__main-contents_desc-item  sub-page__main-contents_annotation-container">
                              <SubpageMainContentsAnnotation 
                                annotationList={content.annotationList} 
                                index={index}
                              />               
                          </div>

                        ) : (
                          <></>
                        )
                        }
                        
                      </div>
                      <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area sub-page__main-contents_grid-bg-area-1"></div>
                      <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area sub-page__main-contents_grid-bg-area-2"></div>
                      <div className="sub-page__main-contents_grid-bg sub-page__main-contents_grid-bg-area  sub-page__main-contents_grid-bg-area-3"></div>
                  </div>                           

                ))
              }          


            </div>

          </ScrollingSection>
        </div>

        {
          this.props.customSection && 
            <div className="sub-page__main-contents_custom-section">
              {this.props.customSection}
            </div> 
        }        
      </div>
    )
  }
}
