import { React } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export default function HeaderTitle(props) {			
	
	const textContainer = (screenSize) => {
		// console.log(screenSize)

		return {
			initial: {			
				width: '100vw',			
				height: '100%',    
				backgroundColor: 'hsl(0, 0%, 0%)',
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

	
		
	const motionRect = (screenSize) => {

		// console.log(screenSize)

		return {
			initial: {
				width: '100%',
				height: '100%',
				color: 
				'rgba(75, 85, 99)',					
				fill: 'currentColor',
				y: 
	
					'0%'					

			},
			animate: {				
				y: 
					screenSize == 'smallScreens'
					? '55%'					
					: '-70%',					
				transition: {
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
				},
			},
		}
	}


	      
	return (		
		<motion.div
			className="header__initial-animation"
			initial={props.isSiteFirstMount ? "initial" : ""}
			animate={props.isSiteFirstMount ? "animate" : ""}
				// Without this, the text SVG animation doesn't work as well. 			
			style={{				
				width: '100%',
			}}
			variants={textContainer(props.screenSize)}			
		>     
			<Link 
				className={`link link_color_${props.contentsColor} header__main-link header__main_flex-container`}
				to='/'
				onClick={props.handleOnClick}
			>
				<motion.svg 				
					// variants={SVGContainer}
					className="header__main_svg"
				>
					<pattern
						id="pattern"
						patternUnits="userSpaceOnUse"															
						width="100%"				
						height="100%"
						color={`${props.contentsColor}`}								
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
								
							variants={motionRect(props.screenSize)}
						/>
							{/* 
								= For the animation FILTER COLOR.
								=> This moves OVER the above one. 
								=> The background-color does NOT change in both screen sizes. 
							*/}
							
					</pattern>
					<text				
						textAnchor="middle"
						x="50%"
						y="50%"
						style={{														
							fill: "url(#pattern)" 
							// fill: `${props.contentsColor}`
						}}	
						className={`header__title header__main-title_color_${props.contentsColor}`}				
					>
						ドコデもん				
					</text>
			</motion.svg>
					
			</Link>
			
		</motion.div>
	
	)
}
