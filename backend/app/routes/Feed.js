import {queryHashtag} from './Twitter/Hashtag'
import rp from 'request-promise';


export function initRoutes(app){
    twitterFeedRoutes(app);
    redditFeedRoutes(app);
}

/**
 * Series of API calls that use the
 * Twitter API and our RESTful API to communicate Twitter Data 
 * between Server and Client
 * @param app express router 
 */
function twitterFeedRoutes(app){

    app.get('/twitter/tweets', (req, res) => {
        var hashtags = ['omegalul', 'weebsout', 'vivon', 'zucc'];
        
        var payload = [];

        for(var hashtag of hashtags){
            payload.push(queryHashtag(hashtag));
        }
        
        Promise.all(payload).then(result => {
            res.send(result);
        })
    })

}
/**
 * API calls that use the Reddit API to get subreddit
 * information and relay it to client 
 * @param app express router
 */
function redditFeedRoutes(app){
    app.get('/reddit/subreddits', (req, res) => {
            rp.get('https://www.reddit.com/r/all.json').then(response => {
                res.send(response);
        });
    });
}