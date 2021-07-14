import React, { Component } from 'react'
import { motion  } from 'framer-motion'
import {Helmet} from "react-helmet";

import StructuredDataBreadcrumbList from '../../../blocks/StructuredData/StructuredData/__BreadcrumbList/StructuredData__BreadcrumbList';
import Header from '../../../blocks/Header/Header';
import SubPageContents from '../__MainContents/SubPage__MainContents';

import SubPageTop from '../__Top/SubPage__Top';
import SubPageMainContents from '../__MainContents/SubPage__MainContents';
import Footer from '../../../blocks/Footer/Footer';
import ReservationModal from '../../../blocks/ReservationModal/ReservationModal';

export default class SubPageLayout extends Component {


  constructor(props) {
    super(props)


      this.state = {
        reservationModalIsOpen: false,        
          
      }
      this.toggleReservationModal = this.toggleReservationModal.bind(this);
    
  }

  componentDidMount() {
    window.scrollTo(0, 0);

  } 
  
  toggleReservationModal() {
    this.setState({
      reservationModalIsOpen: !this.state.reservationModalIsOpen, 
    })
  }


	render() {

		const {
		props: {        
			pageTitle,
			// Page title in Japanese
			bgName,
			currentPage,
			// An Object
			IntroTextList,
			// An Array
			gridContents,
			// An Array
			gridContentsAmount,
			// Number
			customSection,
			// A Component
		}
		} = this;

		// console.log(window.location)
		// console.log(`${window.location.origin}${window.location.pathname}`)

		const breadcrumbListItems = 
		[
			{
			url:`${window.location.origin}`, 
			name:"Top",
			},
			{
			url:`${window.location.origin}${window.location.pathname}`, 
			name: `${pageTitle}`
			}
		]

	return (
		<motion.div
			className="sub-page__layout"
			  initial={{
			    width: '100%',
			    height: '100%',
			    display: 'flex',
			    flexDirection: 'column',
			    alignItems: 'cemnter',
			  }}
			  exit={{ opacity: 0 }}
			  exitBeforeEnter
			//   className="sub-page__contents" 
		>
			
			<Helmet>
			<title>{pageTitle} - 石井花壇 | 温海温泉旅館【公式サイト】</title>
			<meta property="og:type" content="website" />    
			</Helmet>
			
			<StructuredDataBreadcrumbList 
			breadcrumbListItems={breadcrumbListItems}
			/> 

			{/* <Header 
			toggleReservationModal={this.toggleReservationModal}
			isSiteFirstMount={this.props.isSiteFirstMount}
			/>         */}
				{/* 
				= Has Initial Animation 
				=> OUTSIDE of the motion.div with pageContainer variant         
				*/}
			
			<motion.div
				initial="initial"
				animate="animate"
				variants={this.props.pageContainerVariants}
				>

				<motion.div
				initial="initial"
				animate="animate"
				// variants={this.props.pageContentsVariants(this.props.isSiteFirstMount)}										
				className="sub-page__contents-container"
				>
				{/* Solution */}
					<div
					className="sub-page__top-container"
					>
					<SubPageTop 
						bgName={this.props.bgName}
						pageTitle={this.props.pageTitle}
					/>
					
					</div>

					<div
					className="sub-page__main-contents-container"
					>
						<SubPageMainContents 
							pageTitle={this.props.pageTitle}
							currentPage={this.props.currentPage}
							IntroTextList={this.props.IntroTextList}
							gridContents={this.props.gridContents}        
							gridContentsAmount={this.props.gridContentsAmount}    
							customSection={this.props.customSection}							

						/>
					</div>  
						
					
					<div className="sub-page__footer-container">
						<Footer />    
					</div>

					{
					this.state.reservationModalIsOpen && 
						<div
						className="sub-page__researvation-modal-container"
						>

							<ReservationModal 
							reservationModalIsOpen={this.state.reservationModalIsOpen} 
							toggleReservationModal={this.toggleReservationModal}
							/>
						</div>
					}


				{/* Issue */}
					{/* <SubPageContents
					bgName={this.props.bgName}
					pageTitle={this.props.pageTitle}
					currentPage={this.props.currentPage}
					IntroTextList={this.props.IntroTextList}
					gridContents={this.props.gridContents}            
					gridContentsAmount={this.props.gridContentsAmount}
					// className="sub-page__contents"

					/>     */}
				
				</motion.div>

			</motion.div>
		</motion.div>
	)
}
}
