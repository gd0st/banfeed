import { boolean, text } from '@storybook/addon-knobs';

import Button from './Button';
import { MdSave } from 'react-icons/md';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Button',
	component: Button,
};

export const Text = () => (
	<Button disabled={boolean('Disabled', false)} onClick={action('clicked')}>
		{text('Button Text', 'hello world')}
	</Button>
);

export const WithIcon = () => (
	<Button
		disabled={boolean('Disabled', false)}
		onClick={action('clicked')}
		icon={MdSave}
	>
		{text('Button Text', 'save button')}
	</Button>
);
