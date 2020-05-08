import {
	ArrowDownwardRounded,
	ArrowUpwardRounded,
	ChatBubble,
	Reddit,
} from '@material-ui/icons';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButtom from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import React from 'react';
import { Text } from '../index';
import clsx from 'clsx';
import { compactInteger } from 'humanize-plus';
import { formatDistanceToNowStrict } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import sanitize from 'sanitize-html-react';
import useSWR from 'swr';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '4px 8px',
		minHeight: 120,
	},
	contentwrapper: {
		flexGrow: 1,
		display: 'flex',
	},
	content: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		'&:last-child': {
			paddingBottom: 0,
		},
	},
	thumbnailarea: {
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginBottom: theme.spacing(1),
		marginLeft: theme.spacing(1),
		width: 120,
		height: 90,
	},
	thumbnail: {
		width: 120,
		height: 90,
		borderRadius: theme.shape.borderRadius,
		overflow: 'hidden',
	},
	header: {
		display: 'flex',
		paddingBottom: theme.spacing(1),
		'& > *:not(:last-child)': {
			marginRight: theme.spacing(1),
		},
	},
	headertext: {},
	title: {
		fontSize: 18,
		pointerEvents: 'all',
	},
	body: {
		flexGrow: 1,
		cursor: 'pointer',
	},
	previewcontainer: {
		display: 'flex',
		position: 'relative',
		marginTop: theme.spacing(2),
		background: 'rgba(0,0,0,0.2)',
		maxHeight: 512,
		justifyContent: 'center',
		overflow: 'hidden',
	},
	previewimg: {
		objectFit: 'contain',
		maxHeight: 512,
		margin: '0 auto',
	},
	previewvideo: {},
	embedcontainer: {
		display: 'flex',
		position: 'relative',
		marginTop: theme.spacing(2),
		background: 'rgba(0,0,0,0.2)',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	selftextcontainer: {
		maxHeight: 200,
		paddingTop: 0,
		overflow: 'hidden',
		maskImage: 'linear-gradient(180deg,#000 60%,transparent)',
		color: theme.palette.text.secondary,
	},
	subreddittext: {},
	subredditlink: {
		display: 'inline',
	},
	subredditicon: {
		display: 'inline-block',
		width: 20,
		height: 20,
		marginRight: theme.spacing(1),
	},
	bottom: {
		display: 'flex',
		background: 'rgba(0, 0, 0, 0)',
		padding: theme.spacing(1),
	},
	votecontainer: {
		display: 'inline-flex',
		position: 'relative',
		width: theme.spacing(4) * 4,
		borderRadius: theme.shape.borderRadius,
		overflow: 'hidden',
		opacity: 0.67,
		transition: 'opacity 0.35s',
		'&:hover': {
			opacity: 1,
		},
	},
	upvote: {
		position: 'absolute',
		top: -theme.spacing(3),
		left: -theme.spacing(2),
		width: theme.spacing(2) * 5,
		height: theme.spacing(2) * 5,
	},
	downvote: {
		position: 'absolute',
		top: -theme.spacing(3),
		right: -theme.spacing(2),
		width: theme.spacing(2) * 5,
		height: theme.spacing(2) * 5,
	},
	score: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: theme.typography.pxToRem(14),
	},
	actions: {
		flexGrow: 1,
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		paddingTop: 0,
		paddingBottom: 0,
		'& > *': {
			opacity: 0.67,
			transition: 'opacity 0.35s',
			'&:hover': {
				opacity: 0.9,
			},
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
	},
}));

const fetcher = (url) => fetch(url).then((r) => r.json());

// TODO have backend get the subreddit icon so we don't need this component just to make the separate fetch

const PostCardSubredditIcon = (props) => {
	const { subreddit, className } = props;

	const { data, error } = useSWR(
		`https://www.reddit.com/r/${subreddit}/about.json`,
		fetcher,
		{
			revalidateOnFocus: false,
		}
	);

	return (
		<Avatar
			className={className}
			alt={`r/${subreddit}`}
			src={
				data && !error && data.data.icon_img
					? data.data.icon_img
					: undefined
			}
		>
			<Reddit></Reddit>
		</Avatar>
	);
};

const PostCard = (props) => {
	const { className, post, onClick, onClickComments } = props;
	const classes = useStyles();

	// TODO all this preview shit should be done on the backend

	// --- preview shit start

	const hasEmbed =
		post && post.secure_media_embed && !!post.secure_media_embed.content;
	const hasPreview = !!(post && post.preview && post.preview.enabled);
	const hasSelfText = !!(
		post &&
		post.selftext_html &&
		post.selftext_html.length > 0
	);

	let body = '';

	if (hasSelfText) {
		body = React.createElement('div', {
			className: classes.selftextcontainer,
			dangerouslySetInnerHTML: {
				__html: sanitize(post.selftext_html),
			},
		});
	} else if (hasEmbed) {
		body = React.createElement('div', {
			className: classes.embedcontainer,
			dangerouslySetInnerHTML: {
				__html: sanitize(post.secure_media_embed.content),
			},
		});
	} else if (hasPreview) {
		const image = post.preview.images[0];

		// this code is probably wrong btw

		if (image.reddit_video_preview) {
			body = (
				<div className={classes.previewcontainer}>
					<video className={classes.previewvideo} muted autoPlay loop>
						<source
							src={image.reddit_video_preview.hls_url}
							type='application/vnd.apple.mpegURL'
						></source>
						<source
							src={image.reddit_video_preview.dash_url}
							type='application/dash+xml'
						></source>
					</video>
				</div>
			);
		} else {
			let isVideo = post.is_video;
			let url = image.source.url;

			url = url.replace(/&amp;/g, '&');

			body = isVideo ? (
				<div className={classes.previewcontainer}>
					<video className={classes.previewvideo} muted autoPlay loop>
						<source src={url}></source>
					</video>
				</div>
			) : (
				<div className={classes.previewcontainer}>
					<img
						alt={post.title}
						className={classes.previewimg}
						src={url}
					></img>
				</div>
			);
		}
	}

	// --- preview shit end

	return (
		<Card className={clsx(classes.root, className)}>
			<div className={classes.contentwrapper}>
				<CardContent className={classes.content}>
					<div className={classes.header}>
						{post && (
							<PostCardSubredditIcon
								className={classes.subredditicon}
								subreddit={post.subreddit}
							/>
						)}
						<Text
							className={classes.subreddittext}
							display='inline'
							variant='body2'
						>
							<Link
								className={classes.subredditlink}
								href={
									post
										? `//reddit.com/r/${post.subreddit}`
										: '#'
								}
								target='_blank'
							>
								{post && `r/${post.subreddit}`}
							</Link>
						</Text>
						<Text
							className={classes.headertext}
							display='inline'
							variant='caption'
							color='textSecondary'
						>
							{post
								? post.crosspost_parent_list
									? 'Crossposted by '
									: 'Posted by '
								: ''}
							<Link
								color='textSecondary'
								href={
									post
										? `//reddit.com/user/${post.author}`
										: '#'
								}
								target='_blank'
							>
								{post ? `u/${post.author}` : ''}
							</Link>{' '}
							{post &&
								formatDistanceToNowStrict(
									new Date(post.created_utc * 1000),
									{
										addSuffix: true,
									}
								)}
						</Text>
					</div>
					<div className={classes.body} onClick={onClick}>
						<Text
							className={classes.title}
							variant='h5'
							component='h2'
						>
							{post && post.title}
						</Text>
						{body}
					</div>
				</CardContent>
				{post &&
					!hasPreview &&
					!hasEmbed &&
					post.thumbnail &&
					post.thumbnail !== 'default' && (
						<CardActionArea
							className={classes.thumbnailarea}
							onClick={onClick}
						>
							<CardMedia
								className={classes.thumbnail}
								alt={post.title}
								image={post.thumbnail}
							></CardMedia>
						</CardActionArea>
					)}
			</div>
			<div className={classes.bottom}>
				<div className={classes.votecontainer}>
					{post && (
						<>
							<Text className={classes.score} variant='button'>
								{compactInteger(post.score, 1)}
							</Text>
							<IconButtom className={classes.upvote}>
								<ArrowUpwardRounded fontSize='inherit' />
							</IconButtom>
							<IconButtom className={classes.downvote}>
								<ArrowDownwardRounded fontSize='inherit' />
							</IconButtom>
						</>
					)}
				</div>
				<CardActions className={classes.actions}>
					<Button
						size='small'
						startIcon={post ? <ChatBubble /> : undefined}
						onClick={post ? onClickComments : undefined}
					>
						{post
							? `${compactInteger(post.num_comments, 1)} comments`
							: '   '}
					</Button>
				</CardActions>
			</div>
		</Card>
	);
};

export default PostCard;
