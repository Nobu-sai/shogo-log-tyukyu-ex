import { React } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export default function HeaderTitle(props) {	
		

	// The single source of truth for the Dimensions (width and height) of the title text.
	// => Called from setTextContainerVariants()
	// =>> The children are set with 100%.  
	const setTextDimensionValues = () => {
		
		let textWidth;
		let textHeight;

		if(props.screenSize == 'smallScreens') {
			textWidth = '120px'
			textHeight = '120px'
		} else if (props.screenSize == 'largeScreens') {
			textWidth = '180px';
			textHeight = '180px';
		} else if (props.screenSize == 'largeScreensExtra') {
			textWidth = '280px';
			textHeight = '280px';
		}

		return {
			textWidth: textWidth,
			textHeight: textHeight,
		}
	}
	
	const setInitialAnimationBGVariants = (screenSize) => {
		// console.log(screenSize)

		return {
			initial: {		
				opacity: 1,					
				width: '100vw',			
				height: '100%',    
				backgroundColor: props.headrColor,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				// Without Flexbox, the SVG animation doesn't work. 
			},
			animate: {		 				
				width: '100%',
				transition: {
					when: "afterChildren",
					duration: 
						// 1.0,
						screenSize == 'smallScreens'
						? 0.1
						: 1.0,
					ease: [0.87, 0, 0.13, 1],
				}, 
			},
		};
	
	}

	const setTextContainerVariants	= () => {
		
		// console.log(screenSize)
		// console.log(setTextDimensionValues().textWidth)
		let width = setTextDimensionValues().textWidth
		let height = setTextDimensionValues().textHeight

		return {
			initial: {	
				// opacity: 0,		
					
				width: width,				
				height: height,				
				backgroundColor: props.headrColor,
				// display: 'flex',
				// alignItems: 'center',
				// justifyContent: 'center',
				// Without Flexbox, the SVG animation doesn't work. 
			},
			animate: {		 								
				// opacity: 1,
				paddingTop: 120,
				transition: {
					when: "afterChildren",
					duration: 
						1.5,
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
	
				width: '100%',
				height: '100%',
				color: 'rgba(75, 85, 99)',					
				fill: 'currentColor',
				y: 
	
					'0'					
					// 40,

			},
			animate: {				
				y: slideScale,			
				transition: {	
					when: "afterChildren",
					delay: 1.0,
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
				// wiringMode: 'horizontal-tb',

			},
			animate: {					
				opacity: 1,						
				// writingMode: 'vertical-lr',
				transition: {		
					delay: 0.5,
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
				// zIndex: 1500,
				width: '100%',
				height: '100%',
				backgroundColor: props.headrColor,
				// opacity: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
			variants={setInitialAnimationBGVariants(props.screenSize)}			
		>     
			<motion.div
				className="header__initial-animation-text-container"
				initial={props.isSiteFirstMount ? "initial" : ""}
				animate={props.isSiteFirstMount ? "animate" : ""}
					// Without this, the text SVG animation doesn't work as well. 			
				// style={props.isSiteFirstMount ? "" : "style"}
				style={{
					// paddingTop: '120px',				
					width: setTextDimensionValues().textWidth,
					height: setTextDimensionValues().textHeight,
				}}
				variants={setTextContainerVariants()}			
			>     
				<Link 
					className={`link link_color_${props.contentsColor} header__main-link header__main_flex-container`}
					to='/'
					onClick={props.handleOnClick}
				>
					<motion.svg 										
						className="header__main_svg"
						style={{
							width: '100%',
							height: '100%',
							backgroundColor: props.headrColor,
						}}
					>
						<pattern
							id="pattern"
							patternUnits="userSpaceOnUse"															
							width="100%"				
							height="100%"
							color={props.contentsColor}
							
						>
				
							<rect 																	
								style={{
									width: '100%',
									height: '100%',	
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
								fill: "url(#pattern)" 								
							}}	
							className={`header__title header__main-title_color_${props.contentsColor}`}				
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
