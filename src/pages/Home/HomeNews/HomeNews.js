import React, { Component } from 'react'
import $ from 'jquery';
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

import HomeNewsTabs from './__Tabs/HomeNews__Tabs';
import HomeNewsItems from './__Items/HomeNews__Items';
import HomeSectionHeading from '../__SectionHeading/Home__SectionHeading';


export default class HomeNews  extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      activeTab: '営業情報',      
    }
    
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    this.$HomeNewsContentsContainer = $('.home-news__contents-container');  
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
    this.$HomeNewsContentsContainer.fadeOut(500);
  }

  showContents() {
    this.$HomeNewsContentsContainer.fadeIn(500);

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
      <Fade 
        duration={3000}
        triggerOnce
      >

      <div className="home-news">

        <div className="home-news__heading-container">
          <HomeSectionHeading headingTitle={'お知らせ'}/>
        </div>

        <div className="home-news__tabs-container">
          <Slide 
            direction="up" 
            triggerOnce
            style={
              {
                'width': '100%', 
                'height': '100%'
              }
            }
          >

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
          </Slide>
        </div>

        <div className="home-news__contents-container">          
            {
              this.state.activeTab &&
                <HomeNewsItems                         
                  items={items[this.state.activeTab]}
                />
            }
 

        </div>
      </div>
      </Fade>
    )
  }
}
