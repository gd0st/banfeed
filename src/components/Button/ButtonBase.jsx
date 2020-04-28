import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {},
});

const ButtonBase = (props) => {
	const { children, onClick, disabled } = props;
	const classes = useStyles({});

	return (
		<button
			className={classes.root}
			href='#'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default ButtonBase;
