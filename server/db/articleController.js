const { Articles } = require('./articleModel.js');
const { Queries } = require('./queryModel.js');


function addToHeadlines(req, res, next) {
    req.body.forEach(x => {
        Articles.create(x); // needs to be changed
    });
    next();
}

function addToQueries(req, res, next) {
    req.body.forEach(x => {
        Queries.create(x); // needs to be changed
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