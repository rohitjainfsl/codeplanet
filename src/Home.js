import React from 'react'
import Header from './Header'
import Section from './Section'

function Home(){	
		return(
			<>
				<Header />
				<Section 
					carname='Model 3' 
					tagline='Order Online for touchless delivery' 
					leftBtnText='Custom Order' 
					rightBtnText='Existing Inventory' 
					bgImage='model-3.jpg'
					arrow = {true}
					 />
					

				<Section 
					carname='Model S' 
					tagline='Order Online for touchless delivery' 
					leftBtnText='Custom Order' 
					rightBtnText='Existing Inventory' 
					bgImage='model-s.jpg' />

				<Section 
					carname='Model X' tagline='Order Online for touchless delivery' 
					leftBtnText='Custom Order' 
					rightBtnText='Existing Inventory' 
					bgImage='model-x.jpg' />

				<Section 
					carname='Model Y' tagline='Order Online for touchless delivery' 
					leftBtnText='Custom Order' 
					rightBtnText='Existing Inventory' 
					bgImage='model-y.jpg' />

				<Section 
					carname='Solar Panels' 
					tagline='Lower Cost Solar Panels in India' 
					leftBtnText='Order Now' 
					rightBtnText='Learn More' 
					bgImage='solar-panel.jpg' />

				<Section 
					carname='Solar Roof' 
					tagline='Produce Clean Energy from your roof' 
					leftBtnText='Order Now' 
					rightBtnText='Learn More' 
					bgImage='solar-roof.jpg' />

				<Section 
					carname='Accessories' 
					leftBtnText='Order Now' 
					bgImage='accessories.jpg' />
			</>
			
		)	
}
export default Home