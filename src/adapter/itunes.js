const axios = require('axios');
const Sentiment = require('sentiment');
const summarizer = require('./summarize');
const config = require('../config');


const sentiment = new Sentiment();

async function getAppReviews() {
    try {
        const response = await axios.get('https://itunes.apple.com/us/rss/customerreviews/id=' + config.appId + '/json');
        console.log('Received app reviews');
        const feeds = response.data.feed.entry;
        return feeds;
    } catch (error) {
        console.log(error);
    }
}

async function getSentimentAnalysis(feeds) {
    try {
        let comment;
        feeds.forEach(element => {
            comment += ". " + element.content;
        });
        const summary = await summarizer.getReviewSummary(comment);
        return summary;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAppReviews,
    getSentimentAnalysis
};