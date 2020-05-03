import { Button, Surface, Text } from '../';
import { boolean, select, text } from '@storybook/addon-knobs';

import React from 'react';
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/core/styles';

export default {
	title: 'Button',
	component: Button,
};

const useStyles = makeStyles((theme) => ({
	root: {},
	section: {
		margin: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(1),
	},
	container: {
		padding: theme.spacing(3),
		textAlign: 'center',
		'& > *:not(:last-child)': {
			marginRight: (props) => !props.fullWidth && theme.spacing(2),
			marginBottom: (props) => props.fullWidth && theme.spacing(1),
		},
	},
	surface: {
		width: 256,
		padding: theme.spacing(6),
		textAlign: 'center',
	},
}));

export const Default = () => {
	const classes = useStyles();

	return (
		<Surface className={classes.surface} variant='outlined'>
			<Button
				variant={select(
					'variant',
					['text', 'outlined', 'contained'],
					'text'
				)}
				color={select(
					'color',
					['default', 'inherit', 'primary', 'secondary'],
					'default'
				)}
				size={select('size', ['small', 'medium', 'large'], 'medium')}
				fullWidth={boolean('fullWidth', false)}
				disabled={boolean('disabled', false)}
				disableElevation={boolean('disableElevation', false)}
				disableFocusRipple={boolean('diableFocusRipple', false)}
				component={select('component', ['button', 'a'], 'button')}
				onClick={action('onClick')}
			>
				{text('button text', 'button')}
			</Button>
		</Surface>
	);
};

export const VariantDemo = () => {
	const props = {
		size: select('size', ['small', 'medium', 'large'], 'medium'),
		fullWidth: boolean('fullWidth', false),
		disableElevation: boolean('disableElevation', false),
	};

	const classes = useStyles(props);

	return (
		<div className={classes.root}>
			{['text', 'contained', 'outlined'].map((e, i) => (
				<div className={classes.section} key={i}>
					<Text
						color='textSecondary'
						variant='overline'
						className={classes.title}
					>
						variant='{e}'
					</Text>
					<Surface variant='outlined' className={classes.container}>
						<Button variant={e} {...props}>
							Default
						</Button>
						<Button variant={e} color='primary' {...props}>
							Primary
						</Button>
						<Button variant={e} color='secondary' {...props}>
							Secondary
						</Button>
						<Button variant={e} disabled {...props}>
							Disabled
						</Button>
					</Surface>
				</div>
			))}
		</div>
	);
};
