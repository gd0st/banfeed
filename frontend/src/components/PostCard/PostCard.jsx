import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import React from 'react';
import { Text } from '../index';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const useStyles = makeStyles((theme) => ({
	root: {
		// background: 'red',
		display: 'flex',
		margin: '4px 8px',
		height: 160,
	},
	content: {
		// display: 'flex',
		flexGrow: 1,
	},
	thumbnail: {
		width: 80,
		height: 60,
	},
	post: {},
}));

const PostCard = (props) => {
	const { className, post, onClick } = props;
	const classes = useStyles({});

	// const {
	// 	data,
	// 	error,
	// } = useSWR(
	// 	`https://www.reddit.com/r/${post.subreddit}/about.json`,
	// 	fetcher,
	// 	{ revalidateOnFocus: false }
	// );

	// if (data) console.log(data.data.icon_img);

	return (
		<Card className={clsx(classes.root, className)} onClick={onClick}>
			<CardActionArea className={classes.thumbnail}>
				{post.thumbnail !== 'default' && (
					<CardMedia
						className={classes.thumbnail}
						alt={post.title}
						image={post.thumbnail}
					></CardMedia>
				)}
			</CardActionArea>
			<div className={classes.content}>
				<CardContent onClick={onClick}>
					<Text variant='h6'>{post.title}</Text>
					<div>
						<Text>{post.subreddit_name_prefixed}</Text>
					</div>
				</CardContent>
			</div>
		</Card>
	);
};

export default PostCard;
