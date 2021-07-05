import React, { Component } from 'react'

import SubPage from '../SubPage';

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
        'explanationList': 
          [
            '温海の源泉かけ流し露天風呂付き客室になります。',
            'あなただけの上質な安らぎのひとときを。',
          ],
        'annotationList': 
          [
            '＊部屋数に限りがございます。',
            '＊洗い場はないため、お体を先に大浴場でお流しになって頂く必要があります。'
          ]      
      },
      {
        'pic': 'oheya02',
        'title': '庭園付き客室',
        'explanationList': 
          [
            '庭園付きの客室になります。',
            'お庭を見ながら、ほっとするひとときをお過ごしください。',
          ],
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
        'explanationList': 
          [
            '最もベーシックな客室になります。',
            '伝統の中にモダンさを取り入れた内装となっており、',
            'とても過ごしやすくしていただけます。',
          ],
        'annotationList': 
          [
            '＊全室お部屋より日本海を望むことができます。',            
            
          ]      
      }
    ]
      
    
    return (
      <div className="sub-page-oheya">        
        <SubPage 
          bgName={'oheya-header'}
          pageTitle={'お部屋'}
          currentPage={{
            'link': '/oheya',
            'name': 'oheya'
          }}
          IntroTextList={[
            '創業より受け継がれてきた石井花壇の和の造り', 
            '温海の雄大な絶景を堪能していただけるように設計された客室',
            'ゆるやかに流れ行く時間に身を委ねて'
          ]}
          gridContents={gridContents}            
          gridContentsAmount={3}

        />    
      </div>
    )
  }
}
