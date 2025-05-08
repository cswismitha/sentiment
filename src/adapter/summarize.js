const SummarizerManager = require("node-summarizer").SummarizerManager;

async function getReviewSummary(customerReviews) {
  let Summarizer = new SummarizerManager(customerReviews,2);
  let summary = await Summarizer.getSummaryByRank();
  return summary ? summary.summary : '';
}

module.exports = {
  getReviewSummary
};
