import React, { Component } from 'react'
import {Helmet} from "react-helmet";


export default class StructuredDataBreadcrumbList extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
    this.createBreadrcumbList = this.createBreadrcumbList.bind(this);
    
  }
  
  createBreadrcumbList() {

    const itemList = [];
    this.props.breadcrumbListItems.map((item, index) => {
      itemList.push(
        {
        "@type": "ListItem",
        "position": `${index + 1}`,
        "name": `${item.name}`,
        "item": `${item.url}`
        
        })
    })

    // console.log(itemList)
    // console.log({
    //   "@context": "https://schema.org",
    //   "@type": "BreadcrumbList",
    //   "itemListElement": itemList
    // })


    return {  
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": itemList,
            }              
             
           
  }

  render() {
    // console.log(this.props.breadcrumbListItems)
    
    return (

      <Helmet>
      
        <script type="application/ld+json">
          
          {JSON.stringify(this.createBreadrcumbList())}
          
      
        </script>
           

      </Helmet>
    )
  }
}
