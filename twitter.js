require('dotenv').config();

const Twitter = require('twitter');

const {
	CONSUMER_KEY,
	CONSUMER_SECRET,
	ACCESS_TOKEN_KEY,
	ACCESS_TOKEN_SECRET,
	http_proxy
} = process.env;

const client = new Twitter({
	consumer_key:         CONSUMER_KEY,
	consumer_secret:      CONSUMER_SECRET,
	access_token_key:     ACCESS_TOKEN_KEY,
	access_token_secret:  ACCESS_TOKEN_SECRET,
	request_options: {
		proxy: http_proxy
	}
});

const userHandle = process.argv[2];
const params = {
	screen_name: userHandle
};
client.get('statuses/user_timeline', params)
	.then(tweets => {
		const result = tweets.map(tweet => tweet.text);
		console.log(result);
	})
	.catch(error => {
		console.error(error);
	});
