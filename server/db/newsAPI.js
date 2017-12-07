const request = require('request');
const sourcesObj = require('./sources');
const newsAPI = {};

// get news source names from https://newsapi.org/sources
// set rankings based on http://www.businessinsider.com/most-and-least-trusted-news-outlets-in-america-2017-3

const sources = Object.keys(sourcesObj).join(',');
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

newsAPI.apiQuery = (req, res, next) => {
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
};

newsAPI.apiHeadlines = (req, res, next) => {
  const options = {
    url: `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${process.env.NEWS_APIKEY}`,
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    res.send(JSON.parse(body).articles);
    res.locals.headlineData = JSON.parse(body).articles;
    next();
  });
};

module.exports = newsAPI;