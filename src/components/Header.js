import React from 'react';
import './Header.css';
import HCol from './HeadCol';
// import background from '../assets/shroom.jpg';

function Header() {
	const textSize = (window.innerHeight > 1500) ? '10rem' : '8rem'
	return (
		<div className="box">
				{/* <img className='image' src={background} alt='dino' /> */}
				{/* <h1 className='text'>Hello, I'm Claire!</h1> */}
				{/* <p><i className='arrow down'></i></p> */}
				
			<div>
				<HCol width='20%' fontSize={textSize} color='blue' letter='Hey,' />
				<HCol width='15%' fontSize={textSize} color='blue' letter="I'm" />
				<HCol width='10%' fontSize={textSize} color='blue' letter='C' />
				<HCol width='10%' fontSize={textSize} color='blue' letter='L' />
				<HCol width='10%' fontSize={textSize} color='blue' letter='A' />
				<HCol width='10%' fontSize={textSize} color='blue' letter='I' />
				<HCol width='10%' fontSize={textSize} color='blue' letter='R' />
				<HCol width='10%' fontSize={textSize} color='blue' letter='E' />
				<br />
			</div>

			<div>
				<a href="https://scrapbook.hackclub.com/clairebookworm/" ><HCol class="none" width='40%' fontSize='3rem' height='3%' color='#ffdc89' bgcolor="#ffb400" letter='Summer' /></a>
				<a href="https://www.notion.so/nerdfighteria/Claire-Wang-5a682aa1023640c4914bf7e16bf59096" ><HCol class="none" width='40%' fontSize='3rem' height='3%' color='#ffdc89' bgcolor="#ffb400" letter="Resume" /></a>
			</div>
		</div>
	);

}
export default Header;
