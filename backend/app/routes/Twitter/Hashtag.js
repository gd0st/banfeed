import { TwitterClient } from '../clients/Clients';

/**
 * Get's series of tweets of relating to a specific hashtag
 */
function queryHashtag(hashtag){
    return new Promise((resolve, reject) => {
        TwitterClient.get(`search/tweets.json?q=%23${hashtag}&include_entities=true`, (err, tweets, res) => {
        if(err){
            reject()
            throw err;
        }

        return resolve(tweets);

    })});
}


export { queryHashtag }