import { ButtonBase } from '../Button';
import React from 'react';

const IconButton = (props) => {
	const { children, onClick } = props;
	return <ButtonBase onClick={onClick}>{children}</ButtonBase>;
};

export default IconButton;
