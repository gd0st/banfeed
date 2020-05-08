import '../src/index.css';

import { addDecorator, addParameters } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import themes, { defaultTheme } from '../src/themes';

import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import centered from '@storybook/addon-centered/react';
import { useDarkMode } from 'storybook-dark-mode';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withKnobs);
addDecorator(centered);
addDecorator(withA11y);

const mapTheme = (theme) => ({
	base: theme.palette.type,
	colorPrimary: theme.palette.primary.main,
	colorSecondary: theme.palette.secondary.dark,
	appBg: theme.palette.background.paper,
	appContentBg: theme.palette.background.default,
	appBorderColor: theme.palette.divider,
	appBorderRadius: theme.shape.borderRadius,
	fontBase: theme.typography.fontFamily,
	fontCode: '"Fira Code", monospace',
	textColor: theme.palette.text.primary,
	textInverseColor: theme.palette.text.disabled,
	barTextColor: theme.palette.text.secondary,
	barSelectedColor: theme.palette.primary.main,
	barBg: theme.palette.background.default,
	inputBg: theme.palette.background.default,
	inputBorder: theme.palette.divider,
	inputTextColor: theme.palette.text.primary,
	inputBorderRadius: theme.shape.borderRadius,
	// brandTitle: 'My custom storybook',
	// brandUrl: 'https://example.com',
	// brandImage: 'https://placehold.it/350x150',
});

addParameters({
	backgrounds: Object.keys(themes).map((e) => ({
		name: themes[e].name || 'theme',
		value: themes[e].palette.background.default,
		// default: defaultTheme === e,
	})),
	darkMode: {
		light: mapTheme(themes['light']),
		dark: mapTheme(themes['dark']),
	},
});

addDecorator(function (storyFn) {
	// const useBackground = boolean("use theme background", true);
	const theme = themes[useDarkMode() ? 'dark' : 'light'];

	// Hook your theme provider with some knobs
	return React.createElement(ThemeProvider, {
		// A knob for theme added to every story
		theme,
		children: [
			// React.createElement('style', {
			// 	dangerouslySetInnerHTML: {
			// 		__html: `html {
			// 			background-color: ${theme.palette.background.default};
			// 		}`,
			// 	},
			// }),
			storyFn(),
		],
	});
});
