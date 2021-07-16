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
						screenSize == 'smallScreens'
						? 0.1
						: 1.0,
					ease: [0.87, 0, 0.13, 1],
				}, 
			},
		};
	
	}
		
	const motionRect = (screenSize) => {

		return {
			initial: {
				width: '100%',
				height: '100%',
				color: 'rgba(75, 85, 99)',
				fill: 'currentColor',
				y: 40,

			},
			animate: {
				y: 80,
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
			// basicStyle={props.isSiteFirstMount ? "" : "basicStyle"}
			style={{
				// zIndex: 2000,
				width: '100%',
			}}
			variants={textContainer(props.windowWidth)}			
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
						// width={750}
						// height={800}
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
						<motion.rect 
								
							variants={props.isSiteFirstMount ? motionRect(props.screenSize) : null}
						/>
					</pattern>
					<text				
						textAnchor="middle"
						x="50%"
						y="50%"
						style={{
							// fontSize: '2.25rem',
							// lineHeight: '2.5rem',
							// fontWeight: 'bold',
							fill: "url(#pattern)" 
							// fill: `${props.contentsColor}`
						}}	
						className={`header__main-title header__main-title_color_${props.contentsColor}`}				
					>
						ドコデもん				
					</text>
			</motion.svg>
					
			</Link>
			
		</motion.div>
	
	)
}
