import React from 'react'
import styled from 'styled-components'

function Header(){
	return(
		<MainMenu>
			<Logo>
				<img src="images/Logo.svg" alt="" />
			</Logo>
			<CenterMenu>
				<ul>
					<li><a href="">Model S</a></li>
					<li><a href="">Model 3</a></li>
					<li><a href="">Model X</a></li>
					<li><a href="">Model Y</a></li>
					<li><a href="">Solar Roof</a></li>
					<li><a href="">Solar Panels</a></li>
				</ul>
			</CenterMenu>
			<RightMenu>
				<ul>
					<li><a href="">Shop</a></li>
					<li><a href="">Account</a></li>
					<li><a href="">Menu</a></li>
				</ul>
			</RightMenu>
		</MainMenu>
	)
}


const MainMenu = styled.header`
	display:flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 3rem;
	position: fixed;
	width: 100%;
	top: 0;


	ul{
		display: flex;
		list-style: none;
	}
	ul li a{
		text-decoration: none;
		color: #000;
		padding: 0 0.75rem;
		font-weight: 600;
	}
`
const Logo = styled.div``
const CenterMenu = styled.div``
const RightMenu = styled.div``



export default Header