const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Authors'},
    genre: {type: mongoose.Schema.Types.ObjectId, ref: 'Genres'}
})

const Books = mongoose.model('Books',bookSchema)

module.exports = Books
