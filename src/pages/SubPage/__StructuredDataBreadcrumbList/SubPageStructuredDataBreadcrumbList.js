
import React, { Component } from 'react'

import StructuredDataBreadcrumbList from '../../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList'



export default class SubPageHead extends Component {
	render() {


		const breadcrumbListItems = 
		[
			{
			url:`${window.location.origin}`, 
			name:"トップ",
			},
			{
			url:`${window.location.origin}${window.location.pathname}`, 
			name: `${this.props.pageTitle}`
			}
		]

		return (
			<div>
				
				<StructuredDataBreadcrumbList
					breadcrumbListItems={breadcrumbListItems}
				
				/>
			</div>
		)
	}
}