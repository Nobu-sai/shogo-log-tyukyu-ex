// Usage
// : ALL Style for HeaderTitle HERE.

import { React } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




export default function HeaderTitle(props) {	
		
	
	
	// The single source of truth for the Dimensions (width and height) of the title text.
	// => Called from setTextContainerVariants()
	// =>> The children are set with 100%.  
	const setResponsiveValues = () => {
		
		let textWidth
		let textHeight
		let textFontSize
		let textContainerInitialMarginTop
		let textContainerInitialMarginBottom
		let textContainerMarginBottom
		let textContainerMarginTop

		if(props.screenSize == 'smallScreens') {
			textWidth = '60px'
			textHeight = '60px'
			textFontSize = '24px'
			textContainerInitialMarginTop = '0'
			textContainerInitialMarginBottom = '100vh'
			textContainerMarginTop = '0'
			textContainerMarginBottom = '14vh'
		} else if (props.screenSize == 'largeScreens') {
			textWidth = '100px'
			textHeight = '100px'
			textFontSize = '34px'
			textContainerInitialMarginTop = '100vh'
			textContainerInitialMarginBottom = '0'
			textContainerMarginBottom = '0'
			textContainerMarginTop = '5vh'
		} else if (props.screenSize == 'largeScreensExtra') {
			textWidth = '200px'
			textHeight = '200px'
			textFontSize = '68px'
			textContainerInitialMarginTop = '100vh'
			textContainerInitialMarginBottom = '0'
			textContainerMarginBottom = '0'
			textContainerMarginTop = '5vh'
		}

		return {
			textWidth: textWidth,
			textHeight: textHeight,
			textFontSize: textFontSize,
			textContainerInitialMarginTop: textContainerInitialMarginTop,
			textContainerInitialMarginBottom: textContainerInitialMarginBottom,
			textContainerMarginTop: textContainerMarginTop,
			textContainerMarginBottom: textContainerMarginBottom,
		}
	}
	
	const setInitialAnimationBGVariants = () => {		

		return {
			initial: {														
				width: '100vw',			
				height: '100vh',    					
			},
			animate: {							
				width: '100%',
				height: '100%',
				transition: {
					when: "afterChildren",
					duration: 
						// 1.0,
						props.screenSize == 'smallScreens'
						? 0.1
						: 1.0,
					ease: [0.87, 0, 0.13, 1],
				}, 
			},
		};
	
	}

	const setTextContainerStyle = () => {
		let boxShadow = "4px 4px 24px 14px hsla(0, 0%, 0%, 0.9)"   ;

	 	// if (props.headerColor == 'black') {
		// 	boxShadow = "4px 4px 24px 14px hsla(0, 0%, 0%, 0.9)"   
		
		//   } else if (props.headerColor == 'white') {
		// 	boxShadow = "4px 4px 24px 14px hsla(0, 0%, 100%, 0.9)"        
		//   }

		console.log(setResponsiveValues().textContainerMarginTop)	

		 return {
			zIndex: 1100, 
			boxShadow: boxShadow,
			marginTop: 
				setResponsiveValues().textContainerMarginTop,	
			marginBottom: 
				setResponsiveValues().textContainerMarginBottom,	
			borderRadius: '50%',		
			width: setResponsiveValues().textWidth,
			// minWidth: '60px',
			height: setResponsiveValues().textHeight,					
			// minHeight: '60px',
			backgroundColor: 'hsl(209, 100%, 43%)',
			// overflow: 'visible'		
		 }
	}

	const setTextContainerAnimationStyleVariants = () => {
		
		// console.log(screenSize)
		// console.log(setTextDimensionValues().textWidth)
		let width = setResponsiveValues().textWidth
		let height = setResponsiveValues().textHeight

		return {
			initial: {									
				marginTop: setResponsiveValues().textContainerInitialMarginTop,
				marginBottom: setResponsiveValues().textContainerInitialMarginBottom,
				// margin: '-100vh',	
				width: width,				
				height: height,					
				opacity: 0,	
			},
			animate: {										

				marginTop: 
					setResponsiveValues().textContainerMarginTop,	
				marginBottom: 
					setResponsiveValues().textContainerMarginBottom,	
				opacity: 1, 													
				transition: {
					// when: "afterChildren",
					duration: 						
						1.5,
					delay: 1.0,
					ease: [0.87, 0, 0.13, 1],
				}, 
			},
			
		};
	

	}
		
	const setMotionRectVariants = () => {

		// console.log(screenSize)

		let slideScale;
		if(props.screenSize == 'smallScreens') {
			slideScale = 80
		} else if (props.screenSize == 'largeScreens') {
			slideScale = -160
		} else if (props.screenSize == 'largeScreensExtra') {
			slideScale = -320
		}

		return {
			initial: {
				
				
				width: setResponsiveValues().textWidth,	
				height: setResponsiveValues().textHeight,
				color: 'rgba(75, 85, 99)',					
				fill: 'currentColor',
					// Without this, the text is NOT set as the props.contentsColor (set in the parent pattern Tag) or NOT shown.				
				y: 0

			},
			animate: {				
				y: slideScale,			
				transition: {	
					height: '400%',
					when: "afterChildren",
					delay: 		
						3.0,											
					duration: 1.5,
					ease: [0.87, 0, 0.13, 1],
				},
			},
		}
	}

	const setTextVariants = () => {
		return {
			initial: {
				opacity: 0,	
				
			},
			animate: {					
				opacity: 1,						
				
				transition: {		
					delay: 						
						2.5,							
					duration: 0.5,
					ease: [0.87, 0, 0.13, 1],
				},
			},
		}

	}

	      
	return (		
		<motion.div
			className="header__initial-animation-bg"
			initial={props.isSiteFirstMount ? "initial" : ""}
			animate={props.isSiteFirstMount ? "animate" : ""}
				// Without this, the text SVG animation doesn't work as well. 			
			style={{						
				width: '100%',
				height: '100%',
				backgroundColor: props.headerColor,								
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'visible'	
			}}
			variants={setInitialAnimationBGVariants(props.screenSize)}			
		>     
			<motion.div
				className="header__initial-animation-text-container"
				initial={props.isSiteFirstMount ? "initial" : ""}
				animate={props.isSiteFirstMount ? "animate" : ""}
					// Without this, the text SVG animation doesn't work as well. 											
				style={setTextContainerStyle()}
				variants={setTextContainerAnimationStyleVariants()}			
			>     
				<Link 
					className={`link`}
					to='/'
					style={{
						width: '100%',
						height: '100%',
						
					}}
					onClick={props.handleOnClick}
				>
					<motion.svg 										
						className="header__main_svg"
						style={{							
							width: '100%',
							height: '100%',		
							color: '#fff',														
							overflow: 'visible'		
						}}
					>
						<pattern
							id="pattern"
							patternUnits="userSpaceOnUse"															
							width="100%"				
							height="100%"


							// Color values issues
								// It seems solved by "Do NOT use % Unit or a Unit RELATIVE to the PARENT (pattern Tag) to pattern Tag/rect Tag." said underneath (rect Tag/style)
								// color={props.setContentsColor()}
									// IS (4/10) white (the returned Variable from Header/setContentsColor())
								// color={props.contentsColor}
									// IS (9/10) white (the returned Variable from Header/setContentsColor())
								// color={contentsColor}
									// The props.contentsColor
									// Is NOT | SOMETIMES (2/5) IS white (the returned Variable from Header/setContentsColor())
								// color={contentsColor}
									// Declared in THIS Component. 							
								color="#fff"
						>				
							{/* // Usage of rect Tags
							// : Do NOT use % Unit or a Unit RELATIVE to the PARENT (pattern Tag) to pattern Tag/rect Tag.
								// P
									// : https://www.evernote.com/shard/s350/nl/180370944/689a5dab-1573-7f98-0557-049f0109aa34?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Issue%22%20=%20In%20the%20FIRST%20render,%20Header/headerColor%20State%20is%20undefined%20being%20accessed%20from%20Header/setHeaderStyle()%20which%20is%20Called%20from%20motion.div/style%20Prop.
										//  The cause for "the animated text (In svg Tag/text Tag) sometimes loses the color" seems because of the WIDTH of svg Tag/pattern Tag/rect Tag set as "100%" even though the PARENT pattern Tag has NOT width.									 */}
							<rect 																	
								style={{
									width: setResponsiveValues().textWidth,	
									height: setResponsiveValues().textHeight, 
									fill: 'currentColor',									
								}}
							/>
								{/* 
									= The NORMAL Styles.
								
								*/}							
							<motion.rect 
									
								variants={setMotionRectVariants()}
								
							/>
								{/* 
									= For the animation FILTER COLOR.
									=> This moves OVER the above one. 
									=> The background-color does NOT change in both screen sizes. 
								*/}
								
						</pattern>
						<motion.text				
							textAnchor="middle"
							x="50%"
							y="50%"
							style={{										
								
								fontSize: setResponsiveValues().textFontSize,												
								fontFamily: "'Otomanopee One', sans-serif",
								fill: "url(#pattern)", 								
									// To animate with the rect Tags, I need to this.
								overflow: 'visible',
							}}								
							initial="initial"
							animate="animate"
							variants={setTextVariants()}

						>
							ドコデもん				
						</motion.text>
					</motion.svg>
						
				</Link>
				
			</motion.div>
			
		</motion.div>
	
	)
}
