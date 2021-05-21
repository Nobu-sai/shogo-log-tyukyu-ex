import React, { Component } from 'react'

import HomeNewsTabs from './__Tabs/HomeNews__Tabs';
import HomeNewsItems from './__Items/HomeNews__Items';
import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading';

import $ from 'jquery';

export default class HomeNews  extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      activeTab: '営業情報',      
    }
    
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    this.$HomeNewsItemsComponent = $('.home-news__items-component');  
  }

  handleOnClick(tab) {

    this.hideContents()
    setTimeout(() => this.setActiveTab(tab), 500);

  }

  setActiveTab(tab) {
    this.setState({
      activeTab: tab,
    }, this.showContents)
  }

  
  
  hideContents(tab) {    
    this.$HomeNewsItemsComponent.fadeOut(500);
  }

  showContents() {
    this.$HomeNewsItemsComponent.fadeIn(500);

  }

  render() {
    const items = 
      {
        '営業情報': 
        {          
          'title': '営業情報',          
          'contents':         
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
            ],
        },      
        'その他': 
        {
          'title': 'その他',          
          'contents': 
            [
              {
                'pic': 'news01',
                'date': 'DATE',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum!'      
              }, 
              {
                'pic': 'news02',
                'date': 'DATE',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum! '      
              }, 
              {
                'pic': 'news02',
                'date': '2020.12.24',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum!',              
              }, 
              {
                'pic': 'news01',
                'date': '2020.12.24',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum!',              
              }, 
              {
                'pic': 'news01',
                'date': '2020.12.24',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum!',              
              }, 
              {
                'pic': 'news02',
                'date': '2020.12.24',
                'text': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sint natus voluptatem dolore earum!',              
              }, 
            ]
        }      
      }


      // if ()

    return (
      <div className="home-news">

        <div className="home-news__heading-container">
          <HomeSectionHeading headingTitle={'お知らせ'}/>
        </div>

        <div className="home-news__tabs-container">
          <HomeNewsTabs
            activeTab={this.state.activeTab}
            handleOnClick={this.handleOnClick}
          >
            <div label="営業情報">
              営業情報 
            </div>
            <div label="その他">
              その他
            </div>
          </HomeNewsTabs>
        </div>

        <div className="home-news__items-container">
          <div className="home-news__items-component">
            {
              this.state.activeTab &&
                <HomeNewsItems                         
                  items={items[this.state.activeTab]}
                />
            }

          </div>

        </div>
      </div>
    )
  }
}
