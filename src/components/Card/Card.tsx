import { ButtonBase, Surface } from '../index';

import React from 'react';
import clsx from 'clsx';

const Card = (props) => {
	const { className, children, onClick } = props;

	return (
		<ButtonBase className={clsx(className)} onClick={onClick}>
			<Surface>{children}</Surface>
		</ButtonBase>
	);
};

export default Card;
