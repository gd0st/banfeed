import Button from './Button';
import { MdSave } from 'react-icons/md';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Button',
	component: Button,
};

export const Text = () => (
	<Button onClick={action('clicked')}>button text</Button>
);

export const WithIcon = () => (
	<Button onClick={action('clicked')} icon={<MdSave />}>
		button text
	</Button>
);
