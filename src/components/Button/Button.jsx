import ButtonBase from './ButtonBase';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
	label: {},
}));

const Button = (props) => {
	const { children, onClick, disabled, icon } = props;
	const classes = useStyles(props);

	return (
		<ButtonBase
			className={classes.root}
			onClick={onClick}
			disabled={disabled}
		>
			<span className={classes.label}>
				{icon || ''}
				{children}
			</span>
		</ButtonBase>
	);
};

export default Button;
