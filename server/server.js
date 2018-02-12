require('dotenv').config();
var pathfinderUI = require('pathfinder-ui');
const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
const articleController = require('./db/articleController');
const newsAPI = require('./db/newsAPI');
const OAuthController = require('./db/OAuthController');
const cookieController = require('./db/cookieController');
const userController = require('./db/userController');

// connect to MongoDB database. **Move this to DOTENV
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds133166.mlab.com:33166/teamcheetah`, {
    useMongoClient: true
});
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});

// tool to visualize and test routes in Express
app.use('/pathfinder', function(req, res, next){
    pathfinderUI(app);
    next();
  }, pathfinderUI.router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); 
    res.header('Access-Control-Allow-Credentials', 'true'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(express.static(`${__dirname}/../`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// searches news sources for articles
app.get('/api/articles', newsAPI.apiQuery, articleController.addToQueries);

// gets top headlines from all news sources. Default page on load
app.get('/api/top', newsAPI.apiHeadlines, articleController.addToHeadlines);

app.post('/api/preferences', (req, res) => {
  const sources = req.body;
  console.log(sources);
  res.status(200).send('done');
});

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

app.post('/api/preferences', userController.updatePreferences, 
cookieController.setCookie,
  (req,res) => {
    res.redirect('/')
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
