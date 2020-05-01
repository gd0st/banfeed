import { Card } from '../index';
import React from 'react';
import clsx from 'clsx';

const PostCard = (props) => {
	const { className, post, onClick } = props;

	console.log(post);

	return (
		<Card className={clsx(className)} onClick={onClick}>
			<div>{post.title}</div>
			<div>
				{post.thumbnail !== 'default' && (
					<img src={post.thumbnail}></img>
				)}
			</div>
		</Card>
	);
};

export default PostCard;
