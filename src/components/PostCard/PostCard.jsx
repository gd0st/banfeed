import { ButtonBase, Card, Text } from '../index';

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		// background: 'red',
		display: 'flex',
		margin: '4px 8px',
	},
	content: {
		display: 'flex',
		flexGrow: 1,
	},
	thumbcontainer: {},
	post: {},
}));

const PostCard = (props) => {
	const { className, post, onClick } = props;
	const classes = useStyles({});

	console.log(post);

	return (
		<Card className={clsx(classes.root, className)} onClick={onClick}>
			<ButtonBase className={classes.content} onClick={onClick}>
				<div className={classes.thumbcontainer}>
					{post.thumbnail !== 'default' && (
						<img
							height={post.thumbnail_height}
							width={post.thumbnail_width}
							alt={post.title}
							src={post.thumbnail}
						></img>
					)}
				</div>
				<div className={classes.post}>
					<Text variant='h4' className={clsx()}>
						{post.title}
					</Text>
					<Text variant='subtitle1' className={clsx()}>
						{post.subreddit_name_prefixed}
					</Text>
				</div>
			</ButtonBase>
		</Card>
	);
};

export default PostCard;
