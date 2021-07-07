import React, { Component } from 'react';
// Libraries
import { Link } from 'react-router-dom';

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    

    return (
      <div 
        className={`header__site-menu header__site-menu_${this.props.siteMenuVisibility} header__site-menu_${this.props.headerColor}`}
      >              
        <div className="header__site-menu_grid-container">

          <Link 
            className={`link  link_color_${this.props.contentsColor}  header__menu_grid-item header__menu_oheya`}
            onClick={this.props.handleOnClick}
            to='/oheya'
          >
            お部屋
          </Link> 
          <Link 
            className={`link  link_color_${this.props.contentsColor}  header__menu_grid-item header__menu_oryori`}
            onClick={this.props.handleOnClick}
            to='/oryori'
          >
            お料理
          </Link> 
          <Link 
            className={`link  link_color_${this.props.contentsColor}  header__menu_grid-item header__menu_onsen`}
            onClick={this.props.handleOnClick}
            to='/onsen'
          >
            温泉
          </Link> 
        </div>
      </div>
    )
  }
}

