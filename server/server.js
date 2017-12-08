require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const articleController = require('./db/articleController');
const newsAPI = require('./db/newsAPI');

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds133166.mlab.com:33166/teamcheetah`, {
    useMongoClient: true
});
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/auth/callback', (req, res) => { 
    console.log('GitHub is Calling!!');
    res.end();
});

app.get('/api/articles', newsAPI.apiQuery, articleController.addToQueries);


app.get('/api/top', newsAPI.apiHeadlines, articleController.addToHeadlines);


app.get('/login', //facebook signup, // fb OAuth, //redirect to homepage 
);

app.get('/signup', //fb OAuth, //redirect to homepage
);

app.get('/auth/callback', (req,res) => {


});

// app.get('/auth/callback', (req, res) => {
//   request.post(`https://github.com/login/oauth/access_token?client_id=${keys.clientId}&client_secret=${keys.clientSecret}&code=${req.query.code}&accept=json`, (error, response, body) => {
//     const authToken = body.split('&')[0].split('=')[1];
//     const options = {
//       url: `https://api.github.com/user?access_token=${authToken}`,
//       headers: { 'User-Agent': 'didrio' }
//     };
//     request.get(options, (error, response, body) => res.send(body));
//   });
// });

app.listen(port);
console.log(`Server started on PORT:${port}`);