import { React, useEffect } from 'react';
import { motion } from 'framer-motion';

import InitialAnimationText from './__Text/InitialAnimation__Text';

const blackBox = 
	{
		initial: {
			position: 'fixed',						
			left: 0,
			bottom: 0,
			zIndex: 1050,
			width: '100vw',			
			height: '100vh',    
			backgroundColor: 'hsl(0, 0%, 0%)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		animate: {
		 	 height: 0,   
			  transition: {
				when: "afterChildren",
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
			  }, 
		},
	};
      

export default function InitialAnimation(props) {			
	
	      
	      
	return (		
		<motion.div
			className="initial-animation"
			initial="initial"
			animate="animate"
			variants={blackBox}
			onAnimationStart={() => {

				props.controllScrollingUnderneath(true, true);
				
			}}
			onAnimationComplete={() => {				
				props.controllScrollingUnderneath(false)								

			}}
		>     
			<InitialAnimationText />
		</motion.div>
	
	)
}
