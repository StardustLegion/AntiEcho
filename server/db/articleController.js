const Articles = require('./articleModel.js');
const Queries = require('./queryModel');

const articleController = {};

articleController.addToHeadlines = (req, res, next) => { // needs to be fixed
    const result = res.locals.headlineData;
    Articles.create(result);
    next();
};

articleController.addToQueries = (req, res, next) => {
    const search = req.query.q;

    const result = {
        query: search,
        articles: res.locals.apiData,
    };

    Queries.create(result);
    next();
};

articleController.getFromHeadlines = (req, res, next) => {
    Articles.find({}, (err, result) => {
        if (err) console.log(err);
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