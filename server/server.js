require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const articleController = require('./db/articleController');
const newsAPI = require('./db/newsAPI');
const request = require('request');

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


app.get('/api/articles', newsAPI.apiQuery, articleController.addToQueries);


app.get('/api/top', newsAPI.apiHeadlines, articleController.addToHeadlines);


app.get('/login', //facebook signup, // fb OAuth, //redirect to homepage 
);

app.get('/signup', //fb OAuth, //redirect to homepage
);

const parsedResponse;

app.get('/auth/callback', (req, res) => {
    //request authorization from Github OAuth
  request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.OAUTH_ID}&client_secret=${process.env.OAUTH_SECRET}&code=${req.query.code}&accept=json`, 
  (error, response, body) => {
    //convert authorization token for use
    const authToken = body.split('&')[0].split('=')[1];
    //create container for new request with the authorization token attached
    const options = {
      url: `https://api.github.com/user?access_token=${authToken}`,
      headers: { 'User-Agent': 'didrio' }
    };
    //make request to GitHub OAuth 
    request.get(options, (error, response, body) => {
    parsedResponse = JSON.parse(body);
    
    cookieController.setSSIDCookie();
    //   const login = parsedResponse.login;

    //   const dbObj = {
    //     login: parsedResponse.login,
    //     name: parsedResponse.name,
    //     avatar: parsedResponse.avatar_url,
    //     email: parsedResponse.email,
    //     prefrences: {},
    //     createdAt: Date.now(),
    //   }
      
    //   console.log(dbObj);
      res.redirect('/');
    });
  });
})

// app.post('/submitpreferences'), (req,res) => {

// }

app.listen(port);
console.log(`Server started on PORT:${port}`);