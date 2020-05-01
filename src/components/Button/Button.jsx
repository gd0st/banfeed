import ButtonBase from './ButtonBase';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.primary.main,
		color: theme.palette.text.primary,
		lineHeight: 1.75,
		borderRadius: 4,
		fontWeight: 500,
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: '0.875rem',
		letterSpacing: '0.02857em',
		padding: '6px 16px',
		border: 'solid 1px',
		borderColor: theme.palette.primary.main,
		textTransform: 'uppercase',
	},
	label: {},
	label_icon: {
		marginRight: 8,
		fontSize: '1.1em',
	},
}));

const Button = (props) => {
	const { children, onClick, disabled, icon } = props;
	const Icon = icon;
	const classes = useStyles(props);

	return (
		<ButtonBase
			className={classes.root}
			onClick={onClick}
			disabled={disabled}
		>
			<span className={classes.label}>
				{icon ? <Icon className={classes.label_icon} /> : ''}
				{children}
			</span>
		</ButtonBase>
	);
};

export default Button;
