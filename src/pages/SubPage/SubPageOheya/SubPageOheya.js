import React, { Component } from 'react'

import SubPageTop from '../__Top/SubPage__Top';
import SubPageMainContents from '../__MainContents/SubPage__MainContents';
import Footer from '../../../blocks/Footer/Footer';

export default class SubPageOheya extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    
  }

  render() {
    const gridContents = [
      {
        'pic': 'oheya01',
        'title': '温泉付き客室',
        'explanation': '温海の源泉かけ流し露天風呂付き客室になります。あなただけの上質な安らぎのひとときを。',
        'annotationList': 
          [
            '＊部屋数に限りがございます。',
            '＊洗い場はないため、お体を先に大浴場でお流しになって頂く必要があります。'
          ]      
      },
      {
        'pic': 'oheya02',
        'title': '庭園付き客室',
        'explanation': '庭園付きの客室になります。お庭を見ながら、ほっとするひとときをお過ごしください。',
        'annotationList': 
          [
            '＊お庭は複数のお客様と囲む形になります。',
            '＊ご希望の方は「お抹茶/500円」をルームサービスさせていただきます。',
            '＊部屋数に限りがあります。'
          ]      
      },
      {
        'pic': 'oheya03',
        'title': '一般客室',
        'explanation': '最もベーシックな客室になります。伝統の中にモダンさを取り入れた内装となっており、とても過ごしやすくしていただけます。',
        'annotationList': 
          [
            '＊全室お部屋より日本海を望むことができます。',            
            
          ]      
      }
    ]
      
    
    return (
      <div className="sub-page sub-page-oheya">
        <div className="sub-page__top-container">
          <SubPageTop 
            bgName={'oheya-header'}
            pageTitle={'お部屋'}
          
          />
        </div>
        <div className="sub-page__main-contents-container">
          <SubPageMainContents 
            currentPage={{
              'link': '/oheya',
              'name': 'お部屋'
            }}
            IntroTextList={[
              '創業より受け継がれてきた石井花壇の和の造り', 
              '温海の雄大な絶景を堪能していただけるように設計された客室',
              'ゆるやかに流れ行く時間に身を委ねて'
            ]}
            gridContents={gridContents}            

          />
        </div>
        {/* <div className="sub-page__footer-container"> */}
          <Footer />
        {/* </div> */}
      </div>
    )
  }
}
