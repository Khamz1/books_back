
const Genres = require('../models/genre.model');
const Books = require('../models/book.model');
const Critic = require('../models/critics.model');
module.exports.criticControllers = {

    getCritics: async (req, res) => {
        const critics =  await Critic.find()
        res.json(critics)
     },

     getCriticsForOne: async (req, res)=>{
        try{const critics = await Critic.findById(req.params.id)
        res.json(critics)}
        catch(err){res.json(err)}
     },
    
     postCritic: async (req, res) => {
        try {
            const critics = await Critic.create({
                criticText: req.body.criticText,
                criticAuthor : req.body.criticAuthor,
                bookID: req.body.bookID
            })
            res.json(critics)
        } catch (err) { res.json(err) }
    },


    deleteCritic: async (req, res) => {
        await Critic.findByIdAndRemove(
            req.params.id
        )
        res.json('удален')
    },
}
