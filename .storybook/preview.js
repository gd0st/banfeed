import '../src/index.css';

import { addDecorator, addParameters } from '@storybook/react';

import { ThemeProvider } from '@material-ui/styles';
import centered from '@storybook/addon-centered/react';
import darktheme from '../src/themes/dark';
import lighttheme from '../src/themes/light';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemePlayground } from 'storybook-addon-theme-playground';

addDecorator(withKnobs);
addDecorator(centered);
addDecorator(withA11y);

const options = {
	theme: [
		{ name: 'Light', theme: lighttheme },
		{ name: 'Dark', theme: darktheme },
	],
	provider: ThemeProvider,
};

addParameters({
	backgrounds: options.theme.map((e) => ({
		name: e.name,
		value: e.theme.palette.background.default,
	})),
});

addDecorator(withThemePlayground(options));
