const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    authorName: String,
    aboutAuthor: String
})

const Authors = mongoose.model('Authors',authorSchema)

module.exports = Authors