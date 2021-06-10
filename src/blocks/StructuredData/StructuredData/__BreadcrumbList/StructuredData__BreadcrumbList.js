import React, { Component } from 'react'
import {Helmet} from "react-helmet";


export default class StructuredDataBreadcrumbList extends Component {
  
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

    return {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": `${itemList}`
            }
  }

  render() {
    // console.log(this.props.breadcrumbListItems)
    
    return (

      <Helmet>

        <script type="application/ld+json">
          {
            `${this.createBreadrcumbList()}`          
          }
      
        </script>

      </Helmet>
    )
  }
}
