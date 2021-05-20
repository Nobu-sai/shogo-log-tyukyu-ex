import React, { Component } from 'react'

import HomeNewsTab from '../__Tab/HomeNews__Tab';

export default class HomenewsTabs extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
    
    };

    
  }


  handleOnClick = (tab) => {    
    this.props.handleOnClick(tab);
  }

  render() {
    const {
      handleOnClick,
      props: {
        activeTab,
        children,
      },
    } = this;

    return (
      <div className="home-news__tabs">
          <div className="home-news__tab-container">
            {
            children.map((child) => {
              const { label } = child.props;

              return (
                <HomeNewsTab
                  activeTab={activeTab}                  
                  label={label}
                  handleOnClick={handleOnClick}
                />
              );
            })}            
          </div>

      </div>
    )
  }
}
