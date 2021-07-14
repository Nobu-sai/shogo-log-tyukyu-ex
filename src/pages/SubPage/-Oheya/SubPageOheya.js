import { React, Component } from 'react'


import SubPageHead from '../__Head/SubPageHead';
import SubPageStructuredDataBreadcrumbList from '../__StructuredDataBreadcrumbList/SubPageStructuredDataBreadcrumbList';
import SubPageBody from '../__Body/SubPageBody';


export default class SubPageOheya extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    
  }

  render() {
  

    const pageData = {
      currentPage: {
        'link': '/oheya',
        'name': 'oheya'
      },   
      pageTitle: 'お部屋',
      IntroTextList: [
        '創業より受け継がれてきた石井花壇の和の造り', 
        '温海の雄大な絶景を堪能していただけるように設計された客室',
        'ゆるやかに流れ行く時間に身を委ねて'
      ],
      gridContents:  [
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
      ],
      gridContentsAmount: 3,
      bgName: 'oheya-header',
      
      // Initial Animation related
      isSiteFirstMount: this.props.isSiteFirstMount,
      pageVariants: this.props.pageVariants,
      pageContainerVariants: this.props.pageContainerVariants,
      pageContentsVariants: this.props.pageContentsVariants,
      
    }
    console.log(this.props.pageVariants)
    
    return (
      <div className="sub-page sub-page-oheya">   

        <SubPageHead 
          pageTitle={pageData.pageTitle}
        />

        <SubPageStructuredDataBreadcrumbList
          pageTitle={pageData.pageTitle}
        />

        <SubPageBody    
            currentPage={pageData.currentPage}     
            pageTitle={pageData.pageTitle}
            IntroTextList={pageData.IntroTextList}
            gridContents={pageData.gridContents}
            gridContentsAmount={pageData.gridContentsAmount}
            bgName={pageData.bgName}
            // Initial Animation related
            isSiteFirstMount={pageData.isSiteFirstMount}
            pageVariants={pageData.pageVariants}
            pageContainerVariants={pageData.pageContainerVariants}
            pageContentsVariants={pageData.pageContentsVariants}
            
        /> 
        
      </div>
    )
  }
}