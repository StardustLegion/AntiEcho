// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
// const mongoose = require('mongoose');
const request = require('request');

require('dotenv').config();

app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get news source names from https://newsapi.org/sources
// set rankings based on http://www.businessinsider.com/most-and-least-trusted-news-outlets-in-america-2017-3
const sourcesObj = {
  'breitbart-news': 9,
  'the-huffington-post': -8,
  'the-new-york-times': -5,
  'the-wall-street-journal': 0,
  'the-economist': -1,
  'fox-news': 4,
};
const sources = Object.keys(sourcesObj).join(',');
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

// do we ever really need a get route
app.get('/api/articles', (req, res) => {
  const options = {
    url: `https://newsapi.org/v2/everything?sources=${sources}&from=${yyyy}-${mm}-${dd - 2}&to=2017-${mm}-${dd}&q=${req.query.q}&apiKey=${process.env.NEWS_APIKEY}`,
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    res.send(JSON.parse(body).articles);
  });
});

// middleware from database checks if database contains query
app.post('/api/articles', (req, res) => {
  const options = {
    url: `https://newsapi.org/v2/everything?sources=${sources}&from=${yyyy}-${mm}-${dd - 2}&to=2017-${mm}-${dd}&q=${req.body.q}&apiKey=${process.env.NEWS_APIKEY}`,
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    res.send(JSON.parse(body).articles);
  });
});

app.listen(port);
console.log(`Server started on PORT:${port}`);
