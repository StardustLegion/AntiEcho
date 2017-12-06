const { Articles } = require('./articleModel.js');
const Queries = require('./queryModel');

const articleController = {};

articleController.addToHeadlines = (req, res, next) => { // needs to be fixed
    const result = {
        source: {
            id: req.body[0].source.id,
            name: req.body[0].source.name,
        },
        articles: [req.body],
    };

    Queries.create(result);
    next();
};

articleController.addToQueries = (req, res, next) => {
    const search = req.query.q;

    console.log(req.body);
    console.log(res.locals.apiData);
    const result = {
        query: search,
        articles: res.locals.apiData,
    };

    Queries.create(result);
    next();
};

articleController.getFromHeadlines = (req, res, next) => { // needs to be fixed
    const search = req.params.q;

    Articles.find({ query: search }, (err, result) => {
        if (err) throw new Error(err);
        if (result.length > 0) res.send(result);
        else next();
    });
};

articleController.getFromQueries = (req, res, next) => {

    const search = req.query.q;

    Queries.find({ query: search }, (err, result) => {
        if (err) res.send(err);
        if (result.length === 0) next();
        else res.send(result);
    });
};

module.exports = articleController;