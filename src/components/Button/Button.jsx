import ButtonBase from './ButtonBase';
import React from 'react';

const Button = (props) => {
	const { children, onClick, disabled, icon } = props;

	return (
		<ButtonBase onClick={onClick} disabled={disabled}>
			{icon || ''}
			{children}
		</ButtonBase>
	);
};

export default Button;
