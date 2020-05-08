import Normalizer from '../model/Normalizer';
import { queryHashtag } from './Twitter/Hashtag';
import rp from 'request-promise';

export function initRoutes(app) {
	createFeed(app);
}

/**
 * Series of API calls that use the
 * Twitter API and our RESTful API to communicate Twitter Data
 * between Server and Client
 * @param app express router
 */
function twitterFeedRoutes() {
	var hashtags = ['omegalul', 'weebsout', 'vivon', 'zucc'];

	var payload = [];

	for (var hashtag of hashtags) {
		payload.push(queryHashtag(hashtag));
	}

	return Promise.all(payload)
		.then((result) => {
			return result;
		})
		.catch('Unable to fetch');
}
/**
 * API calls that use the Reddit API to get subreddit
 * information and relay it to client
 * @param app express router
 */
function redditFeedRoutes() {
	return rp.get('https://www.reddit.com/r/all.json').then((response) => {
		var jsonObj = JSON.parse(response);
		jsonObj['type'] = 'reddit';
		return jsonObj;
	});
}

function createFeed(app) {
	app.get('/articles/feed', (req, res) => {
		var normalizedFeed = [redditFeedRoutes(), twitterFeedRoutes()];

		Promise.all(normalizedFeed).then((feeds) => {
			var jsonPayload = [];
			for (var feed of feeds) {
				if (feed['type'] === 'reddit') {
					for (var article of feed['data']['children']) {
						// console.log(article)
						// console.log("\n\n\n")
						var normalizedData = new Normalizer(
							feed['type'] + '_' + article['data']['id'],
							feed['type'],
							article['data']['title'],
							article['data']['author'],
							article['data']['subreddit_name_prefixed'],
							'reddit.com' + article['data']['permalink'],
							article['data']['created_utc'],
							null
						);
						if (article['data']['preview'] !== undefined) {
							for (var image of article['data']['preview'][
								'images'
							]) {
								normalizedData.addMedia({
									type: 'photo',
									url: image['source']['url'],
								});
							}
						}

						if (
							article['data']['media_embed']['content'] !==
							undefined
						) {
							normalizedData.addMedia({
								type: 'embed',
								html: article['data']['media_embed']['content'],
							});
						}
						jsonPayload.push(normalizedData.toObject());
					}
				} else {
					for (var articles of feed) {
						for (var article of articles['statuses']) {
							// console.log(article)
							// console.log("\n\n\n")

							var normalizedData = new Normalizer(
								articles['type'] + '_' + article['id_str'],
								articles['type'],
								article['text'],
								article['user']['screen_name'],
								articles['statuses']['tag'],
								`https://twitter.com/itdoesnotmatter/status/${article['id_str']}`,
								new Date(article['created_at']).valueOf()
							);

							if (article['extended_entities'] !== undefined) {
								for (var media of article['extended_entities'][
									'media'
								]) {
									normalizedData.addMedia({
										type: media['type'],
										url: media['media_url'],
									});
								}
							}

							jsonPayload.push(normalizedData);
						}
					}
				}
			}
			res.send(jsonPayload);
		});
	});
}
