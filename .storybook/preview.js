import '../src/index.css';

import { addDecorator, addParameters } from '@storybook/react';

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import centered from '@storybook/addon-centered/react';
import theme from '../src/theme';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(centered);
addDecorator(withA11y);

addParameters({
	backgrounds: [
		{ name: 'theme', value: theme.palette.background.default },
		{ name: 'dark', value: '#1b1e2b' },
		{ name: 'light', value: 'white' },
	],
});

addDecorator((storyFn) => (
	<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
