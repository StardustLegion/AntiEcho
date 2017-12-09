require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
const articleController = require('./db/articleController');
const newsAPI = require('./db/newsAPI');
const request = require('request');
const OAuthController = require('./db/OAuthController');
const cookieController = require('./db/cookieController');
const userController = require('./db/userController');

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

app.get('/auth/callback', OAuthController.authProcess, userController.checkUser, 
cookieController.setCookie, cookieController.startSession, 
  (req,res) => {
      res.redirect('/');
    }
);

// app.post('/submitpreferences'), (req,res) => {

// }

app.listen(port);
console.log(`Server started on PORT:${port}`);

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