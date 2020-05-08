import { PostCard } from '../components';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url).then((r) => {
		console.log('fetch');
		return r.json();
	});

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		overflow: 'auto',
	},
	header: {},
	postlist: {
		display: 'flex',
		flexDirection: 'column',
	},
}));

const PostList = (props) => {
	const { className } = props;

	const { data, error } = useSWR(
		// `https://www.reddit.com/r/${subreddit}.json?raw_json=1`,
		`/reddit/subreddits`,
		fetcher,
		{
			revalidateOnFocus: false,
		}
	);

	if (error) return <div>failed to fetch from reddit</div>;

	// TODO animated the blank cards while loading

	// loading state
	if (!data) {
		return (
			<div className={className}>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
					<PostCard post={false} key={i}></PostCard>
				))}
			</div>
		);
	}

	// TODO auto load the next page when

	return (
		<div className={className}>
			{data.data.children.map((e, i) => (
				<PostCard post={e.data} key={i}></PostCard>
			))}
		</div>
	);
};

const Home = (props) => {
	const classes = useStyles({});
	const subreddit = 'all';

	return (
		<div className={classes.root}>
			<PostList className={classes.postlist} subreddit={subreddit} />
		</div>
	);
};

export default Home;
