import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: (props) =>
			theme.palette.background.surface +
			(props.transparent
				? theme.opacity[
						Math.max(
							Math.min(
								props.depth === undefined ? 1 : props.depth,
								theme.opacity.length - 1
							),
							0
						)
				  ]
				: ''),
		color: theme.palette.text.primary,
		borderRadius: (props) => (props.square ? 0 : 6),
		padding: '12px 16px',
		borderColor: (props) =>
			props.variant === 'outlined'
				? theme.palette.primary.main
				: 'transparent',
		borderStyle: 'solid',
		borderWidth: 1,
		boxShadow: (props) =>
			theme.shadows[
				Math.max(
					Math.min(
						props.depth === undefined ? 1 : props.depth,
						theme.shadows.length - 1
					),
					0
				)
			],
		transition:
			'background-color 0.1s, border-color 0.1s, box-shadow 0.1s, border-radius 0.1s, backdrop-filter 0.1s',
		backdropFilter: (props) =>
			props.transparent &&
			theme.blur[
				Math.max(
					Math.min(
						(props.depth === undefined ? 1 : props.depth) - 1,
						theme.blur.length - 1
					),
					0
				)
			],
	},
}));

const Surface = (props) => {
	const { children } = props;
	const classes = useStyles(props);

	return <div className={classes.root}>{children}</div>;
};

export default Surface;
