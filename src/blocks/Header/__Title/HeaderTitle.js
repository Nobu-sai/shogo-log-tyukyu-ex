import { React } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export default function HeaderTitle(props) {			
	console.log(props.contentsColor)
	// console.log(props.setContentsColor())
	console.log(props.headrColor)
	
	let contentsContainerBGColor;

	// if(props.location.pathname == '/') {     
	// 	console.log(props.location.pathname)
	// 	// When the path is the home.       
	// 	contentsContainerBGColor = 'black'
	// 		// When it is 'black', the color of CONTENTS is 'white' set in setContentsColor().       

	// } else { 
	// 	console.log(props.location.pathname) 
	// 	contentsContainerBGColor = 'white' 

	// }
	
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
		console.log(contentsContainerBGColor)

		return {
			initial: {						opacity: 0,					
				width: '100vw',			
				height: '100vh',    
				// backgroundColor: props.headrColor,
				backgroundColor: contentsContainerBGColor,				
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				// Without Flexbox, the SVG animation doesn't work. 
			},
			animate: {			
				width: '100%',
				height: '100%',
				transition: {
					when: "afterChildren",
					duration: 						
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
				width: width,				
				height: height,				
				backgroundColor: props.headrColor,									
			},
			animate: {		 													
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
				y: 0

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
				

			},
			animate: {					
				opacity: 1,						
				
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
				width: '100%',
				height: '100%',
				backgroundColor: props.headrColor,				
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
					width: setTextDimensionValues().textWidth,
					height: setTextDimensionValues().textHeight,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				variants={setTextContainerVariants()}			
			>     
				<Link 
					className={`link link_color_${props.contentsColor} header__main-link header__main_flex-container`}
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
							// backgroundColor: props.headrColor,
						}}
					>
						<pattern
							id="pattern"
							patternUnits="userSpaceOnUse"															
							width="100%"				
							height="100%"
							color={props.contentsColor}															
							// color={`${props.setContentsColor()}`}	
							// color="#fff"														
							
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
								fill: "url(#pattern)", 								
								// fill: 'currentColor',																
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
