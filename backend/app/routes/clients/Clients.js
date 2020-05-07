import 'dotenv/config';
import Twitter from 'twitter';
import { YoutubeDataAPI } from 'youtube-v3-api'

const TwitterClient = new Twitter({
    consumer_key: String(process.env.TWITTER_API_KEY),
    consumer_secret: String(process.env.TWITTER_API_SECRET),
    bearer_token: String(process.env.TWITTER_ACCESS_TOKEN)
});

const YoutubeClient = new YoutubeDataAPI(String(process.env.GOOGLE_API_KEY));


export {TwitterClient, YoutubeClient}