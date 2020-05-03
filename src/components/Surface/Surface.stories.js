import { boolean, number, select } from '@storybook/addon-knobs';

import React from 'react';
import Surface from './Surface';
import { makeStyles } from '@material-ui/core/styles';

export default {
	title: 'Surface',
	component: Surface,
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			width: 128,
			height: 128,
		},
	},
}));

export const Empty = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Surface
				variant={select(
					'variant',
					{
						default: 'default',
						outlined: 'outlined',
					},
					'default'
				)}
				transparent={boolean('transparent', false)}
				elevation={number('elevation', 1, {
					range: true,
					min: 0,
					max: 24,
					step: 1,
				})}
				square={boolean('square', false)}
			></Surface>
		</div>
	);
};
