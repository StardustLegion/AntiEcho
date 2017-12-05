// const path = require('path');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const request = require('request');

require('dotenv').config();

app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../index.html`));
// });

// app.get('/api/articles',)
app.get('/api/articles', (req, res) => {
  const sources = 'breitbart-news,the-huffington-post,the-new-york-times,the-wall-street-journal,fox-news';
  const options = {
    url: `https://newsapi.org/v2/everything?sources=${sources}&from=2017-12-01&to=2017-12-04&q=${req.query.q}&apiKey=${process.env.NEWS_APIKEY}`,
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    res.send(JSON.parse(body).articles);
  });
});

app.listen(port);
console.log(`Server started on PORT:${port}`);