import ButtonBase from './ButtonBase';
import React from 'react';

const Button = (props) => {
	const { children, onClick, icon } = props;

	return (
		<ButtonBase onClick={onClick}>
			{icon || ''}
			{children}
		</ButtonBase>
	);
};

export default Button;
