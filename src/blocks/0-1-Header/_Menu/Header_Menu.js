import React, { Component } from 'react';
// Libraries
import { Link } from "react-router-dom";
import SubPageFood from '../../../pages/SubPageFood/SubPageFood';
import SubPageHotspring from '../../../pages/SubPageHotspring/SubPageHotspring';

export default class Header_Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {
    
  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {
    
    const {
      props: {
        sitePageLinks
        // The object for the link endpoint for each page. 
      }
    
    } = this;

console.log(sitePageLinks)

    return (
      <>
        <div>
          {sitePageLinks.home}
        </div>
         <div>
           {sitePageLinks.subPageRooms}
        </div>
        <div>          
          {sitePageLinks.subPageFood}
        </div>
        <div>
          {sitePageLinks.subPageHotspring}
        </div>
      </>
    )
  }
}
