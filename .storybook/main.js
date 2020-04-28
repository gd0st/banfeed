module.exports = {
	stories: ['../src/**/*.stories.js'],
	addons: [
		'storybook-dark-mode/register',
		'@storybook/preset-create-react-app',
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions',
		'@storybook/addon-backgrounds/register',
		'@storybook/addon-a11y/register',
		'@storybook/addon-links',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport/register',
	],
};
