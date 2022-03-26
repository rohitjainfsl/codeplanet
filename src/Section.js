import React from 'react'
import styled from 'styled-components'

function Section(props){
	return(
		<MainSection bg={props.bgImage}>
			
			<CarName>
				<h1>{props.carname}</h1>
				<p>{props.tagline}</p>
			</CarName>

			<CTA>
				<Buttons>
					<LButton>{props.leftBtnText}</LButton>
					{ props.rightBtnText && <RButton>{props.rightBtnText}</RButton> }
					
				</Buttons>

				{ props.arrow && <Arrow src="images/down-arrow.svg" />}
				

			</CTA>


		</MainSection>
	)
}


const MainSection = styled.section`
	background-image: url(images/${props=>props.bg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`
const CarName = styled.div`
	padding-top: 15vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1{
		font-size: 2.5rem;
	}
`
const CTA = styled.div`
	text-align: center;
`
const Buttons = styled.div`
	padding-bottom: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const LButton = styled.a`
	background: rgba(23,26,32, 0.8);
	padding: 10px 0;
	margin: 0 1rem;
	width: 256px;
	color: #fff;
	border: none;
	border-radius: 100px;
	display: inline-block;
	text-align: center;
	opacity: 0.85;
`
const RButton = styled(LButton)`
	background: #fff;	
	color: #000;
	
`

const Arrow = styled.img`
	width: 40px;
	padding-bottom: 0.5rem;
	animation: bounce 2s infinite;
`

export default Section