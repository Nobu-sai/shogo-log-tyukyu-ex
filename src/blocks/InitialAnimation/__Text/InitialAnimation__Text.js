import React from 'react'

import { motion } from 'framer-motion';


const SVGContainer = {
	initial: {
		// position: 'absolute',		
		zIndex: 1500,
		display: 'flex',
		opacity: 1,
	},
	animate: {
		opacity: 0,
		transition: {
		  duration: 0.25,
		  when: "afterChildren",
		},
	      },
}


const motionRect = {
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




export default function InitialAnimationText() {
	return (
		<motion.svg 				
			variants={SVGContainer}
		>
			<pattern
				id="pattern"
				patternUnits="userSpaceOnUse"									
				width={750}
				height={800}
				color="#fff"				
			>
				<rect 																	
					style={{
						width: '100%',
						height: '100%',	
						fill: 'currentColor',
					}}
				/>
				<motion.rect 
						
					variants={motionRect}
				/>
			</pattern>
			<text				
				text-anchor="middle"
				x="50%"
				y="50%"
				style={{
					fontSize: '2.25rem',
					lineHeight: '2.5rem',
					fontWeight: 'bold',
					fill: "url(#pattern)" 
				}}				
			>
			tailstore
			</text>
	      </motion.svg>
	)
}
