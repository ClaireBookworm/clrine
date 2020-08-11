import React from 'react'
// import PropTypes from 'prop-types';
import './HeadCol.css'


const HeadCol = (props) => {
	// console.log('Width: ' + props.width)
	// console.log('Viewport: ' + window.innerWidth)
	const height = props.height != null ? props.height : window.innerHeight * 2/5;
	const group = props.class != null ? props.class : 'letter';
	console.log('Group: ' + group)
	const bgcolor = props.bgcolor != null ? props.bgcolor : 'red'
	const l1 = {
		height: height,
		width: props.width,
		alignItems: 'center',
		// display: 'flex',
		// flexShrink: '0',
		fontSize: props.fontSize,
		color: props.color,
		textAlign: 'center',
		// paddingLeft: '5px', 
		backgroundColor: bgcolor,
		display: 'inline-block',
		fontFamily: 'Futura, Nunito, system-ui',
		fontWeight: '800',
	}
	return (
		// <div>
		<div style={l1} className={group}><p>{props.letter}</p></div>
	)
}
// HeadCol.defaultProps = {
// 	bgcolor: 'red'
// };

export default HeadCol;