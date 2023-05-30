const mongoose = require('mongoose');
const genreSchema = mongoose.Schema({
    genreName: String,
    genreDescription: String
})

const Genres = mongoose.model('Genres',genreSchema)

module.exports = Genres