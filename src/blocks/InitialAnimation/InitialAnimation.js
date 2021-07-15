import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import InitialAnimationText from './__Text/InitialAnimation__Text';
export default function InitialAnimation(props) {			
	
	console.log(props.windowWidth);
	
	const textContainer = (screenSize) => {
		console.log(screenSize)
		return {
			initial: {			
				// position: 'fixed'			,
				// top: '0',
				// left: '0',
				width: '100vw',			
				height: '100%',    
				backgroundColor: 'hsl(0, 0%, 0%)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				// Without Flexbox, the SVG animation doesn't work. 
			},
			animate: {		 				
				// position: 'static',	
				width: '100%',
				//   height: '100%',
				transition: {
					when: "afterChildren",
					duration: 
						screenSize == 'smallScreens'
						? 0.1
						: 1.5,
					ease: [0.87, 0, 0.13, 1],
				}, 
			},
		};
	
	}
		
	      
	return (		
		<motion.div
			className="header__initial-animation"
			initial="initial"
			animate="animate"
				// Without this, the text SVG animation doesn't work as well. 
			style={{
				zIndex: 2000,
			}}
			variants={textContainer(props.windowWidth)}			
		>     
			<Link 
				className={`link link_color_${props.contentsColor} header__main-link header__main_flex-container`}
				to='/'
				onClick={props.handleOnClick}
			>
				<InitialAnimationText 
					contentsColor={props.contentsColor}
				/>
					
			</Link>
			
		</motion.div>
	
	)
}
