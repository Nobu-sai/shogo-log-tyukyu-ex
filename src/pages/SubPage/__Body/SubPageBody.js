import React, { Component } from 'react'
import { motion  } from 'framer-motion'


import Header from '../../../blocks/Header/Header';

import SubPageTop from '../__Top/SubPage__Top';
import SubPageMainContents from '../__MainContents/SubPage__MainContents';
import Footer from '../../../blocks/Footer/Footer';
import ReservationModal from '../../../blocks/ReservationModal/ReservationModal';

export default class SubPageBody extends Component {


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

	return (
		<motion.div
			className="sub-page__body"	
			exit="exit"
			exitBeforeEnter
			variants={this.props.pageVariants()}
			
		>
			

			<Header 
			toggleReservationModal={this.toggleReservationModal}
			isSiteFirstMount={this.props.isSiteFirstMount}
			/>        
				{/* 
				= Has Initial Animation 
				=> OUTSIDE of the motion.div with pageContainer variant         
				*/}
			
			<motion.div
				initial="initial"
				animate="animate"
				variants={this.props.pageContainerVariants()}
				className="sub-page__container"
			>

				<motion.div
					initial="initial"
					animate="animate"
					variants={this.props.pageContentsVariants(this.props.isSiteFirstMount)}										
					className="sub-page__contents"
				>
				
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

			
				
				</motion.div>

			</motion.div>
		</motion.div>
	)
}
}
