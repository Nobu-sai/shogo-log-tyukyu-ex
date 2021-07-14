import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class SubPageHead extends Component {
	render() {
		return (
			<div>
				
				<Helmet>
				<title>{this.props.pageTitle} - 石井花壇 | 温海温泉旅館【公式サイト】</title>
				<meta property="og:type" content="website" />    
				</Helmet>
			</div>
		)
	}
}
