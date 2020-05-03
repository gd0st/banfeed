import React from 'react';
import Text from './Text';
import { makeStyles } from '@material-ui/styles';
import { select } from '@storybook/addon-knobs';

export default {
	title: 'Text',
	component: Text,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 500,
	},
}));

const variants = {
	h1: 'h1. Heading',
	h2: 'h2. Heading',
	h3: 'h3. Heading',
	h4: 'h4. Heading',
	h5: 'h5. Heading',
	h6: 'h6. Heading',
	subtitle1:
		'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
	subtitle2:
		'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
	body1:
		'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
	body2:
		'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
	button: 'button text',
	caption: 'caption text',
	overline: 'overline text',
};

export const VariantDemo = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{Object.keys(variants).map((e) => (
				<Text
					key={e}
					variant={e}
					color={select(
						'color',
						[
							'initial',
							'inherit',
							'primary',
							'secondary',
							'textPrimary',
							'textSecondary',
							'error',
						],
						'textPrimary'
					)}
					display={
						['button', 'caption', 'overline'].indexOf(e) !== -1
							? 'block'
							: undefined
					}
					gutterBottom
				>
					{variants[e]}
				</Text>
			))}
		</div>
	);
};
