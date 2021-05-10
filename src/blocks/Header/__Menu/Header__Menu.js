import React, { Component } from 'react';
// Libraries
import { Link } from 'react-router-dom';
// import { withRouter } from "react-router";

export default class Header_Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    
  }

  render() {
    
    const {
      props: {
      }
    
    } = this;


    return (
      <div 
        className="header__menu header__menu_grid-container"
      >              
        <Link 
          className={`link  link_${this.props.contentsColor}  header__menu_grid-item header__menu_oheya`}
          onClick={this.props.handleOnClick}
          to='/oheya'
        >
          お部屋
        </Link> 
        <Link 
          className={`link  link_${this.props.contentsColor}  header__menu_grid-item header__menu_oryori`}
          onClick={this.props.handleOnClick}
          to='/oryori'
        >
          お料理
        </Link> 
        <Link 
          className={`link  link_${this.props.contentsColor}  header__menu_grid-item header__menu_onsen`}
          onClick={this.props.handleOnClick}
          to='/onsen'
        >
          温泉
        </Link> 
      </div>
    )
  }
}

// const Header_MenuRouter = withRouter(Header_Menu);
