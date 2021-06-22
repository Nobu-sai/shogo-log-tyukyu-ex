import React, { Component } from 'react'

export default class SubPageOnsenEffect extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    return (
      <div className="sub-page-onsen__effect">
        <div className="sub-page-onsen__effect-contents">
          <div className="sub-page-onsen__effect_title">
            温泉の効能
          </div>
          <div className="sub-page-onsen__effect_table">
            <div className="sub-page-onsen__effect_table-row">
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_category">
                効能
              </div>
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_content">
                神経痛・慢性関節リューマチ・腰痛・冷え性・慢性婦人病・うちみなど
              </div>
            </div>
            <div className="sub-page-onsen__effect_table-row">
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_category">
                泉質
              </div>
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_content">
                ナトリウム・カルシウム-塩化物泉
              </div>
            </div>
            <div className="sub-page-onsen__effect_table-row">
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_category">
                飲用効果
              </div>
              <div className="sub-page-onsen__effect_table-cell sub-page-onsen__effect_table-cell_content">
                弱塩化物泉は肌にやわらかなため、高齢者や病後の回復期によく、飲用すれば慢性便秘や慢性消化器病に効果があります。
              </div>
            </div>  
          </div>

        </div>
      </div>      
    )
  }
}
