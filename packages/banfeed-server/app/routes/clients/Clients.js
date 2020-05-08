import 'dotenv/config';

import Twitter from 'twitter';

const TwitterClient = new Twitter({
	consumer_key: String(process.env.TWITTER_API_KEY),
	consumer_secret: String(process.env.TWITTER_API_SECRET),
	bearer_token: String(process.env.TWITTER_ACCESS_TOKEN),
});

export { TwitterClient };
