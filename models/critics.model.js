const mongoose = require('mongoose');
const criticSchema = mongoose.Schema({
    criticText: String,
    criticAuthor : String,
    bookID: {type:mongoose.Schema.Types.ObjectId, ref: 'Book'}
})

const Critic = mongoose.model('Critic',criticSchema)

module.exports = Critic