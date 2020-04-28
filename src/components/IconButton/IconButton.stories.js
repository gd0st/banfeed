import { FaGamepad } from 'react-icons/fa';
import { GoBeaker } from 'react-icons/go';
import IconButton from './IconButton';
import { MdSave } from 'react-icons/md';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'IconButton',
	component: IconButton,
};

export const OneIcon = () => (
	<IconButton onClick={action('clicked')}>
		<MdSave />
	</IconButton>
);

const icons = [MdSave, GoBeaker, FaGamepad];

export const SeveralIcons = () => (
	<div>
		{icons.map((Icon, key) => (
			<IconButton key={key} onClick={action('clicked')}>
				<Icon />
			</IconButton>
		))}
	</div>
);
