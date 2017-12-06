// const path = require('path');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const request = require('request');
const articleController = require('./db/articleController');

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds044667.mlab.com:44667/news`);
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});


app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get news source names from https://newsapi.org/sources
// set rankings based on http://www.businessinsider.com/most-and-least-trusted-news-outlets-in-america-2017-3
const sourcesObj = {
    'breitbart-news': 9,
    'fox-news': 6,
    'abc-news': 3,
    'the-wall-street-journal': 0,
    'the-economist': -1,
    'the-new-york-times': -5,
    'the-huffington-post': -8,
};
const sources = Object.keys(sourcesObj).join(',');
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

// do we ever really need a get route
app.get('/api/articles', articleController.getFromQueries, (req, res, next) => {
    const options = {
        url: `https://newsapi.org/v2/everything?sources=${sources}&from=${yyyy}-${mm}-${dd - 2}&to=2017-${mm}-${dd}&q=${req.query.q}&apiKey=${process.env.NEWS_APIKEY}`,
        headers: { Accept: 'application/json' },
    };
    request(options, (error, response, body) => {
        if (error) res.send(error);
        res.send(JSON.parse(body).articles);
        res.locals.apiData = JSON.parse(body).articles;
        next();
    });
}, articleController.addToQueries);

app.get('/api/top', (req, res, next) => {
    const options = {
        url: `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${process.env.NEWS_APIKEY}`,
        headers: { Accept: 'application/json' },
    };
    request(options, (error, response, body) => {
        if (error) res.send(error);
        res.send(JSON.parse(body).articles);
        res.locals.apiData = JSON.parse(body).articles;
        next();
    });
});

// middleware from database checks if database contains query
app.post('/api/articles', (req, res, next) => {
    const options = {
        url: `https://newsapi.org/v2/everything?sources=${sources}&from=${yyyy}-${mm}-${dd - 2}&to=2017-${mm}-${dd}&q=${req.body.q}&apiKey=${process.env.NEWS_APIKEY}`,
        headers: { Accept: 'application/json' },
    };
    request(options, (error, response, body) => {
        if (error) res.send(error);
        res.send(JSON.parse(body).articles);
        next();
    });
});

app.listen(port);
console.log(`Server started on PORT:${port}`);