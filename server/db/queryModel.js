const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
    publishedAt: String,
    createdAt: { type: Date, expires: 300000 }
});

// each query (aka search term) has a list of articles associated with it. These articles get cached in the database temporarily for faster reload.
const querySchema = new Schema({
    query: String,
    articles: [articleSchema],
});

module.exports = mongoose.model('Queries', querySchema);
