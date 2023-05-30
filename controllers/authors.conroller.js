const Authors = require('../models/book.model');
module.exports.authorsControllers ={
    
    getAuthors: async (req, res) =>{
     const author =  await Authors.find({})
                res.json(author)
    },

    postAuthor: async (req, res) =>{
        try{const author = await Authors.create({
            authorName: req.body.authorName,
            aboutAuthor: req.body.aboutAuthor
        }) 
    res.json(author)}
    catch(err){res.json(err)}
    }
}
