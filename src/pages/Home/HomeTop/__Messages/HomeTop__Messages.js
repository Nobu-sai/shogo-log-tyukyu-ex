import React, { Component } from "react";

import { Fade, Slide } from "react-awesome-reveal";

export default class HomeTopMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fade duration={3000} triggerOnce>

      <div className="home-top__messages">
        <div className="home-top__messages_flex-container">

          <div className="home-top__messages_flex-item">       
            <Slide 
              direction="up" 
              triggerOnce
              className="home-top__messages_reveal-container"
            >
              <div className="home-top__messages_title-container">
                
                <div className="home-top__messages_title home-top__messages_title-line-1">温海温泉の</div>
                <div className="home-top__messages_title home-top__messages_title-line-2">美しさに癒やされて</div>
              </div>
            </Slide>     
          </div>
          <div className="home-top__messages_flex-item">
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
              <div className="home-top__messages_contents home-top__messages_text">
                東 北 の 奥 座 敷 で あ る 温 海 温 泉 郷
              </div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              開 湯 は 約 
                <span className="home-top__messages_number"> 
                  1
                </span>  
                <span className="home-top__messages_number"> 
                  3
                </span>  
                <span className="home-top__messages_number"> 
                  0
                </span>  
                <span className="home-top__messages_number"> 
                  0 
                </span>  
              年 前 と さ れ 、 役 小 角 が
            </div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              発 見 し た と 伝 え ら れ ま す
            </div>
            </Slide>     

          </div>

          <div className="home-top__messages_flex-item">
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              石 井 花 壇 は 江 戸 よ り 続 く 由 緒 あ る 旅 館 で
            </div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              ク ラ シ ッ ク な 作 り の 中 に 大 正 ロ マ ン あ ふ れ る
            </div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              内 装 を 残 し て お り ま す
            </div>
            </Slide>     
          </div>


          <div className="home-top__messages_flex-item">
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              圧 倒 的 癒 や し の 空 間 で
            </div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
              <div className="home-top__messages_contents home-top__messages_text">頑 張 る 現 代 人 に</div>
            </Slide>     
            <Slide 
              direction="up" 
              triggerOnce
              // className="home-top__messages_reveal-container"
            >
            <div className="home-top__messages_contents home-top__messages_text">
              頑 張 ら な い 圧 倒 的 な 非 日 常 を ご 提 供 し ま す
            </div>
            </Slide>     
          </div>

          <div className="home-top__messages_flex-item">
            <Slide 
              direction="up" 
              triggerOnce
              className="home-top__messages_reveal-container"
            >
              <div className="home-top__messages_contents home-top__messages_end">石 井 花 壇</div>
            </Slide>     
          </div>

        </div>
        
      </div>
      </Fade>
    );
  }
}
