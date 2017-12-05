const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(`mongodb://${process.env.MONGO_USER}:<${process.env.MONGO_PASSWORD}>@ds044667.mlab.com:44667/news`);
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});

const topHeadlinesSchema = mongoose.Schema({
    "source": {
        "id": String,
        "name": String,
    },
    "author": String,
    "title": String,
    "description": String,
    "url": String,
    "urlToImage": String,
    "publishedAt": String,
});

const TopHeadlines = mongoose.model("TopHeadlines", topHeadlinesSchema)

const querySchema = mongoose.Schema({
    "query": String,
    "source": {
        "id": String,
        "name": String,
    },
    "author": String,
    "title": String,
    "description": String,
    "url": String,
    "urlToImage": String,
    "publishedAt": String,
});

const QueryNews = mongoose.model("QueryNews", querySchema)


module.export = { TopHeadlines, QueryNews };