require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const articleController = require('./db/articleController');
const newsAPI = require('./db/newsAPI');

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds044887.mlab.com:44887/news`);
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});


app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/articles', newsAPI.apiQuery, articleController.addToQueries, articleController.timeoutRemoveQuery);

app.get('/api/top', newsAPI.apiHeadlines, articleController.addToHeadlines, articleController.timeoutRemoveHeadlines);


app.listen(port);
console.log(`Server started on PORT:${port}`);