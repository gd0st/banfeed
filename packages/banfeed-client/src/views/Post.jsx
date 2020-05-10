import { PostCard } from '../components';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url).then((r) => {
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

const Home = (props) => {
	const classes = useStyles({});

	return <div className={classes.root}></div>;
};

export default Home;
