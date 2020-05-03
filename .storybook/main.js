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
		'@storybook/addon-viewport/register',
		{
			name: '@storybook/addon-storysource',
			options: {
				//   rule: {
				// 	// test: [/\.stories\.jsx?$/], This is default
				// 	include: [path.resolve(__dirname, '../src')], // You can specify directories
				//   },
				loaderOptions: {
					prettierConfig: {
						printWidth: 80,
						tabWidth: 1,
						singleQuote: true,
					},
				},
			},
		},
	],
};
