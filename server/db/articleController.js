const { TopHeadlines, QueryNews } = require('./articleModel.js');

function addToHeadlines(data) {
    data.forEach(x => {
        TopHeadlines.create(x);
    });
}

function addToQueries(data) {
    data.forEach(x => {
        QueryNews.create(x);
    });
}

function getFromDB(search) {
    QueryNews.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        return result;
    });
}

module.exports = { addToHeadlines, addToQueries, getFromDB };