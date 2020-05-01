import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.main,
		color: theme.palette.text.primary,
		display: 'block',
		WebkitAppearance: 'none',
		border: 'solid 1px',
		borderColor: theme.palette.primary.main,
		textTransform: 'uppercase',
		padding: '8px 12px',
	},
}));

const ButtonBase = (props) => {
	const { children, className, onClick, disabled } = props;
	const classes = useStyles({});

	return (
		<button
			className={clsx(classes.root, className)}
			href='#'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default ButtonBase;
