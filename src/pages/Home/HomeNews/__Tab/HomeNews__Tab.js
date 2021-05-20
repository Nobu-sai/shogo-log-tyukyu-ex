import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid';

export default class HomeNewsTab extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  handleOnClick = () => {
    const { label, handleOnClick } = this.props;
    handleOnClick(label);
  }


  render() {

    const {
      handleOnClick,
      props: {
        activeTab,
          // String.
          // The same as this.props.label.
        label,
          // What is displayed in the screen.
      },
    } = this;

    let className = 'home-news__tab';

    if(activeTab == label) {
      className += ' home-news__tab_active'
    }
      
    return (
      <div 
        className={className}
        onClick={handleOnClick}
        key={ uuidv4() }        
        >
            {label}
        </div>
    )
  }
}
