import { PostCard, Text } from '../';

import React from 'react';
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/styles';
import { text } from '@storybook/addon-knobs';
import useSWR from 'swr';

export default {
	title: 'Post Card',
	component: PostCard,
	parameters: {
		knobs: {
			timestamps: true,
		},
	},
};

const fetcher = (url) => fetch(url).then((r) => r.json());

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

export const Reddit = () => {
	const subreddit = text('subreddit', 'all');

	const { data, error } = useSWR(
		// `https://www.reddit.com/r/${subreddit}.json?raw_json=1`,
		'/reddit/subreddits',
		fetcher,
		{ revalidateOnFocus: false }
	);

	const classes = useStyles({});

	if (error) return <Text color='error'>failed to fetch from reddit</Text>;
	if (!data) return <Text color='secondary'>fetching posts...</Text>;
	return (
		<div className={classes.root}>
			{data.data &&
				data.data.children &&
				data.data.children.map((e, i) => (
					<PostCard
						post={e.data}
						key={i}
						onClick={action(`onClick: ${i}`)}
					></PostCard>
				))}
		</div>
	);
};
