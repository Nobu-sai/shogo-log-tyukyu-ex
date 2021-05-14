import React, { Component } from 'react'

import HomeNewsItems from './__Items/HomeNews__Items';
import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading';


export default class HomeNews  extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }

  render() {
    return (
      <div className="home-news">

        <div className="home-news__heading-container">
          <HomeSectionHeading headingTitle={'お知らせ'}/>
        </div>

        <div className="home-news__tabs">
          <div className="home-news__tab">
            営業情報
          </div>
          <div className="home-news__tab">
            その他
          </div>
        </div>

        <div className="home-news__items-container">
          <HomeNewsItems items={
            [
            {
              'pic': 'news01',
              'date': '2020.12.24',
              'text': '年末最後の営業日は27日になります。',              
            }, 
            {
              'pic': 'news02',
              'date': '2020.12.24',
              'text': '年末最後の営業日のお知らせ',              
            }, 
            {
              'pic': 'news02',
              'date': '2020.12.11',
              'text': '12.21は臨時休業とさせていただきますので、よろしくお願いします。',              
            }, 
            {
              'pic': 'news01',
              'date': '2020.12.24',
              'text': '年末最後の営業日のお知らせ',              
            }, 
            {
              'pic': 'news01',
              'date': '2020.12.01',
              'text': '和室の改装を行いますため、12.10はお休みさせていただきます。',              
            }, 
            {
              'pic': 'news02',
              'date': '2020.12.24',
              'text': '年末最後の営業日のお知らせ',              
            }, 
            ]
          }/>

        </div>
      </div>
    )
  }
}
