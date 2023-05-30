const Books = require('../models/book.model');
const Authors = require('../models/author.model');
const Genres = require('../models/genre.model');
module.exports.booksControllers = {
    getBooks: async (req, res) => {
       const books =  await Books.find()
       res.json(books)
    },
    getBooksById: async (req, res) => {
       try{const books = await Books.findById(req.params.id)
    res.json(books)}
    catch(err){res.json(err)}
 },
    getBooksByGenre: async (req, res) => {
        try{const books = await Books.find({genre:req.params.id})
    res.json(books)}
    catch(err){res.json(err)}
    },
    postBooks: async (req, res) => {
        try {
            const books = await Books.create({
                name: req.body.name,
                author: req.body.author,
                genre: req.body.genre
            })
            res.json(books)
        } catch (err) { res.json(err) }
    },


    deleteBooks: async (req, res) => {
        await Books.findByIdAndRemove(
            req.params.id
        )
        res.json('удален')
    },

    patchBooks: async (req, res) => {
        try {
            const books = await Books.findByIdAndUpdate(
                req.params.id,
                { name: req.body.name,
                  author: req.body.author,
                  genre: req.body.genre}, 
                  {new: true} );
                res.json(books);
        }catch(err){res.json(err)}
    },
}