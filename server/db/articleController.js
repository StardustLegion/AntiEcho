const { TopHeadlines, QueryNews } = require('./articleModel.js');

// Saving data to collection TopHeadlines
function addToHeadlines(req, res, next) {
    data.forEach(x => {
        TopHeadlines.create(x);
    });
}

// Saving data to collection QueryNews
function addToQueries(req, res, next) {
    data.forEach(x => {
        QueryNews.create(x);
    });
}

// Getting data from collection TopHeadlines
function getFromHeadlines(req, res, next) {
    const search = req.params.id;

    TopHeadlines.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        return result;
    });
}

// Getting data from collection QueryNews
function getFromQueries(req, res, next) {
    const search = req.params.id;

    QueryNews.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        return result;
    });
}

module.exports = { addToHeadlines, addToQueries, getFromQueries, getFromHeadlines };