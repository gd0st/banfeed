import Card from './Card';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Card',
	component: Card,
};

export const EmptyCard = () => <Card onClick={action('clicked')}></Card>;
