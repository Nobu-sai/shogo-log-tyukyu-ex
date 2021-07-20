import React, { useEffect, useState } from 'react'
import { motion  } from "framer-motion"
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'

export default function ScrollTop(props) {	

	const [screenYPos, setScreenYPos] = useState(0)
	const [shouldShowScrollTop, setShouldShowScrollTop] = useState(false)
	const [shouldHideScrollTop, setShouldHideScrollTop] = useState(false)
	const [responsiveValues, setResponsiveValues] = useState({
		bottom:  '25vh',
		width: '60px',
		height:  '100px',
		fontSize: '18px',
	})
		

	// Set the VISIBILITY of this Component
	useEffect(() => {

		const handleScroll = () => {
			// console.log(window.scrollY)
			setScreenYPos(window.scrollY)
		
		}
		
		window.addEventListener('scroll', handleScroll)

		if(screenYPos > 0) {
			setShouldShowScrollTop(true)
		}

		if(shouldShowScrollTop && screenYPos == 0) {
			setShouldHideScrollTop(true)
			setShouldShowScrollTop(false)
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
				// Without this, the Event is triggered many times. 
			
		}
	}, [screenYPos, responsiveValues])

	// Set responsive Style Values
	useEffect(() => {

		// console.log(props.screenSize)
		
		const assignResponsiveValues = () => {
			if(props.screenSize == 'smallScreens') {
				setResponsiveValues(
					{
						bottom:  '20vh',
						width: '30px',
						height:  '60px',
						fontSize: '14px',
					}
				)
			} else if (props.screenSize == 'largeScreens') {						
				setResponsiveValues(
					{
						bottom:  '5vh',
						width: '60px',
						height:  '90px',
						fontSize: '18px',
					}
				)

			} else if (props.screenSize == 'largeScreensExtra') {
				setResponsiveValues(
					{
						bottom:  '5vh',
						width: '120px',
						height:  '180px',
						fontSize: '36px',
					}
				)

			}
		}

		assignResponsiveValues()

		// console.log(responsiveValues)
		
	}, [
		props.screenSize
			// C
				// : Only three triggers. 
					// C
						// : That's Responsive.
		// responsiveValues
	])	

	// Scrolling functionality 
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	


	const setScrollTopStyles = () => {
		// let bottom = setResponsiveValues().bottom
		// let width = setResponsiveValues().width
		// let height = setResponsiveValues().height
		// let fontSize = setResponsiveValues().fontSize

		// console.log(responsiveValues)

		return {
			zIndex: 1001,
			position: 'fixed',
			bottom: 				
				responsiveValues.bottom,
			right: '5vw',
			boxShadow: '4px 4px 14px 4px hsla(0, 0%, 0%, 0.4)',
			width: 	
				responsiveValues.width,
			height: 				
				responsiveValues.height,
			backgroundColor: 'hsl(36 100% 50%)',
			opacity: 0.6,
			fontSize: 				
				responsiveValues.fontSize,
			color: "#fff",
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',			

		}
	}

	const scrollTopAnimationVariants = () => {
		let marginBottomAnimation

		if(shouldShowScrollTop == true) {
			marginBottomAnimation = 0
		} 

		if(shouldHideScrollTop == true) {
			marginBottomAnimation = '100vh'
			setShouldHideScrollTop(false)
		}

		// console.log(shouldShowScrollTop)
		// console.log(marginBottomAnimation)

		return {
			initial: {		
				opacity: 0,		
				marginBottom: '100vh',
			},
			animate: {				
				opacity: 1,
				marginBottom: 					
					marginBottomAnimation,

				transition: {
					duration: 1.0,
				}			
			},
			onHover: {
				opacity: 1,
			}
			
		}
	}
	
	return (
		
		<motion.div 
			className="scroll-to"
			onClick={scrollToTop}
			initial="initial"				
			animate={shouldShowScrollTop || shouldHideScrollTop ? "animate" : ""}							
			variants={scrollTopAnimationVariants()}
			style={setScrollTopStyles()}
		>
			<ChangeHistoryIcon 
				style={{
					width: '100%',
					height: '50%',
				}}
			/>
			<div
			
			>
				Top
			</div>
		</motion.div>
			
	)
}

