import { Surface, Text } from '../';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default {
	title: 'Components/Surfaces/Surface',
	component: Surface,
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			width: 128,
			height: 128,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	video: {
		zIndex: -4,
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
	},
}));

export const Empty = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{boolean('video') && (
				<video
					className={classes.video}
					autoPlay
					muted
					controls
					loop
					src={text(
						'video src url',
						'https://thumbs.gfycat.com/VacantPoliteAmericanbulldog-mobile.mp4'
					)}
				></video>
			)}
			<Surface
				variant={select(
					'variant',
					{
						default: 'default',
						outlined: 'outlined',
					},
					'default'
				)}
				transparent={boolean('transparent', false) ? true : undefined}
				elevation={number('elevation', 1, {
					range: true,
					min: 0,
					max: 24,
					step: 1,
				})}
				square={boolean('square', false)}
			>
				<Text align='center' display='block'>
					{text('text', 'text')}
				</Text>
			</Surface>
		</div>
	);
};
