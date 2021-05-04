import React, { Component } from 'react'
//
import Header_Menu from './_Menu/Header_Menu';

export default class Header extends Component {
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

    return (
      <>
        Header
        <Header_Menu sitePageLinks={sitePageLinks} />
      </>
    )
  }
}
