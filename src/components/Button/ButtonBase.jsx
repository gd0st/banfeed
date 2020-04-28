import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {},
});

const ButtonBase = (props) => {
	const { children, onClick } = props;

	const classes = useStyles({});

	return (
		<button className={classes.root} href='#' onClick={onClick}>
			{children}
		</button>
	);
};

export default ButtonBase;
