import React from 'react';
import './Header.css';
import HCol from './HeadCol';
import background from '../assets/shroom.jpg';

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
				<a href="https://doots.claire.build" ><HCol class="none" width='40%' fontSize='3rem' height='3%' color='#ffdc89' bgcolor="#ffb400" letter='Summer' /></a>
				<a><HCol class="none" width='40%' fontSize='3rem' height='3%' color='#ffdc89' bgcolor="#ffb400" letter="Resume" /></a>
			</div>
			{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,160L17.1,133.3C34.3,107,69,53,103,42.7C137.1,32,171,64,206,69.3C240,75,274,53,309,53.3C342.9,53,377,75,411,112C445.7,149,480,203,514,186.7C548.6,171,583,85,617,85.3C651.4,85,686,171,720,218.7C754.3,267,789,277,823,266.7C857.1,256,891,224,926,202.7C960,181,994,171,1029,154.7C1062.9,139,1097,117,1131,90.7C1165.7,64,1200,32,1234,48C1268.6,64,1303,128,1337,154.7C1371.4,181,1406,171,1423,165.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg> */}
		</div>
	);

}
export default Header;