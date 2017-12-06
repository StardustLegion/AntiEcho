const { Articles } = require('./articleModel.js');
const { Queries } = require('./queryModel.js');


function addToHeadlines(req, res, next) { // needs to be fixed
    const result = {
        source: {
            id: req.body[0].source.id,
            name: req.body[0].source.name,
        },
        articles: [req.body],
    };

    Queries.create(result);
    next();
}

function addToQueries(req, res, next) {
    const search = req.params.id;

    const result = {
        query: search,
        articles: req.body,
    };

    Queries.create(result);
    next();
}

function getFromHeadlines(req, res, next) { // needs to be fixed
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