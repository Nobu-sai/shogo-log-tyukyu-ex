import React, { Component } from 'react'


import SubPageTop from './__Top/SubPage__Top';
import SubPageMainContents from './__MainContents/SubPage__MainContents';
import Footer from '../../blocks/Footer/Footer';

export default class SubPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  

  render() {

    const {
      props: {        
        pageTitle,
        bgName,
        currentPage,
          // An Object
        IntroTextList,
          // An Array
        gridContents,
          // An Array
      }
    } = this;

    return (
      <div className="sub-page">
        <div className="sub-page__top-container">
          <SubPageTop 
            bgName={bgName}
            pageTitle={pageTitle}
          
          />
        </div>
        <div className="sub-page__main-contents-container">
          <SubPageMainContents 
            pageTitle={pageTitle}
            currentPage={currentPage}
            IntroTextList={IntroTextList}
            gridContents={gridContents}            

          />
        </div>       
        
        <Footer />        
      </div>
    )
  }
}
