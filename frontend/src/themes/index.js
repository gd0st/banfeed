import { createMuiTheme } from '@material-ui/core';
import dark from './dark';
import light from './light';

const toHex = (input) => {
	input = Math.min(Math.max(input, 0), 255).toString(16);
	return '0'.repeat(2 - input.length) + input;
};

const createTheme = (theme) => {
	theme = createMuiTheme(theme);

	// apply custom theme properties here

	theme.glow = {
		default: ['none'],
		primary: ['none'],
		secondary: ['none'],
	};

	for (let i = 1; i < 10; i++) {
		const prefix = `0px 0px ${2 + i * 3}px ${0}px`;
		const opacity = toHex(200 - i * 8);
		theme.glow['default'].push(
			`${prefix} ${theme.palette.grey[300]}${opacity}`
		);
		theme.glow['primary'].push(
			`${prefix} ${theme.palette.primary.main}${opacity}`
		);
		theme.glow['secondary'].push(
			`${prefix} ${theme.palette.secondary.main}${opacity}`
		);
	}

	return theme;
};

const themes = {
	light: createTheme(light),
	dark: createTheme(dark),
};

const defaultTheme = 'dark';
export { defaultTheme };
export default themes;
