const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(`mongodb://${process.env.MONGO_USER}:<${process.env.MONGO_PASSWORD}>@ds044667.mlab.com:44667/news`);
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB MLab');
});

const articleSchema = new Schema({
    source: {
        id: String,
        name: String,
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
});

const sourceSchema = new Schema({
    source: {
        id: String,
        name: String,
    },
    articles: [articleSchema],
});

const Articles = mongoose.model('Articles', sourceSchema);

module.export = { Articles };