import { addDecorator, addParameters } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(centered);
addDecorator(withA11y);

addParameters({
	backgrounds: [
		{ name: 'dark', value: '#1b1e2b' },
		{ name: 'light', value: 'white' },
	],
});
