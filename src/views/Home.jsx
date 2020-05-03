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
		display: 'flex',
		flexDirection: 'column',
	},
}));

const Home = (props) => {
	const { data, error } = useSWR(
		'https://www.reddit.com/r/all.json',
		fetcher,
		{ revalidateOnFocus: false }
	);

	const classes = useStyles({});

	if (error) return <div>failed to fetch from reddit</div>;
	if (!data) return <div>loading...</div>;
	return (
		<div className={classes.root}>
			{data.data.children.map((e, i) => (
				<PostCard post={e.data} key={i}></PostCard>
			))}
		</div>
	);
};

export default Home;
