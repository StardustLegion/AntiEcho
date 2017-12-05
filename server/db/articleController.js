const { Articles } = require('./articleModel.js');
const { Queries } = require('./queryModel.js');


function addToHeadlines(req, res, next) {
    Articles.forEach(x => {
        Articles.create(x);
    });
    next();
}

function addToQueries(req, res, next) {
    Queries.forEach(x => {
        Queries.create(x);
    });
    next();
}

function getFromHeadlines(req, res, next) {
    const search = req.params.id;

    Articles.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        if (result.length > 0) res.send(result);
        else next();
    });
}

function getFromQueries(req, res, next) {
    const search = req.params.id;

    Queries.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        if (result.length > 0) res.send(result);
        else next();
    });
}

module.exports = { addToHeadlines, addToQueries, getFromQueries, getFromHeadlines };