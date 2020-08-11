import React from 'react';
import './Navbar.css'


function Navbar() {
	var pages = ['Page1', 'Page2', 'Page3']
	return (
		<header>
			<ul className="headerButtons">
				{ pages.map(function (item) {
					return <li className="navButton" key={item}>{item}</li>
				}) }
			</ul>
		</header>
	)
}
export default Navbar;

