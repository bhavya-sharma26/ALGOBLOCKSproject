import { useState, useEffect } from 'react';
import './Bar.css';

const Bars = ({ index, length, color, changeArray }) => {
	const [len, setLength] = useState(length);

	useEffect(() => {
		setLength(length);
	}, [length]);

	const colors = ['#3d5af1', '#ff304f', '#83e85a'];

	let barStyle = {
		background: colors[color],
		height: length,
		marginTop: 200 - length,
	};

	let textStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 10,
		width: length,
		left: -Math.floor(length / 2) + 11,
		background: 'transparent',
		border: 'none',
	};
	const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLength(0);
			changeArray(index, 0);
		} else {
			val = parseInt(val);
			if (val > 200) {
				setLength(200);
				changeArray(index, 200);
			} else {
				setLength(val);
				changeArray(index, val);
			}
		}
	};
	return (
		<div className='bar' style={barStyle}>
			<input
				type='number'
				style={textStyle}
				value={len}
				className='text'
				onChange={handleChange}
			/>
		</div>
	);
};

export default Bars;
