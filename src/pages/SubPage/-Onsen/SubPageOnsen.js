import React, { Component } from 'react'

import SubPage from '../SubPage';
import SubPageOnsenEffect from './__Effect/SubPageOnsen__Effect';

export default class SubPageOnsen extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

  }
  render() {
    const gridContents = [
      {
        'pic': 'onsen01',
        'title': '貸し切り露天風呂「雲居の湯」',
        'explanationList': 
          [
            '弱酸性の湯質が優しく肌を包み込むような心地よさ',
            '最上階の露天風呂「雲居の湯」では、湯冷めしにくい食塩泉を',
            '熱海の町並みを遠方に望みながら・・・',         
          ]
      },
      {
        'pic': 'onsen02',
        'title': '美肌を促す乳白色の硫黄泉を',
        'explanationList': 
          [
            'まじりっけなしの白いにごり湯。鳥海山から引いた酸性の強い硫酸塩泉を、',
            'たっぷりと掛け流しています。',
            '四季の移り変わりを、天然温泉の湯に浸りながら味わってください。',        
          ]
      },
      
    ]
      
    
    return (
      <div className="sub-page-onsen">        
        <SubPage 
          bgName={'onsen-header'}
          pageTitle={'温泉'}
          currentPage={{
            'link': '/onsen',
            'name': 'onsen'
          }}
          IntroTextList={[
            '心も身体も癒やす汐の温泉。',
            '湯あたりしにくく、',
            '赤ちゃんから年配の方までどなたでも',
            'ゆっくりと安心して入っていただけます。',
            '柔らかく優しい湯にじっくりと漬かれば、',
            '心身共にリラックスできます。'
          ]}
          gridContents={gridContents}  
          gridContentNumber={2}
          customSection={<SubPageOnsenEffect />}          

        />    
      
      </div>
    )
  }
}
