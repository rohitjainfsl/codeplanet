import React, {useState} from 'react'
import styled from 'styled-components'


function Header(){

	const [menuStatus, setMenuStatus] = useState(false);

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
					<li><a href="#" onClick={() => setMenuStatus(true)}>Menu</a></li>
				</ul>
			</RightMenu>

			<SideMenu menuOpen = {menuStatus}>				
				<CloseIcon onClick={() => setMenuStatus(false)}>&times; </CloseIcon>
				<li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panels</a></li>
				<li><a href="">Used Inventory</a></li>
				<li><a href="">Trade In</a></li>
				<li><a href="">Test Drive</a></li>
				<li><a href="">Cyber Truck</a></li>
			</SideMenu>

		</MainMenu>
	)
}

const CloseIcon = styled.span`
	color: #000;
	position: absolute;
	z-index: 100;
	font-size: 2rem;
	cursor: pointer;
	top: 1rem;
	right: 1rem;
`
const SideMenu = styled.ul`	
	position: fixed;
	width: 300px;
	height: 100vh;
	background: #fff;
	color: #000;
	right: ${props => props.menuOpen ? 0 : '-300px'};
	top: 0;
	z-index:99;
	display: flex;
	flex-direction: column;
	padding: 50px 20px 20px 40px;
	transition: all 0.35s;
	
	li{
		padding: 10px 0;
	}
`
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