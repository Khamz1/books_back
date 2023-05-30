
const Genres = require('../models/genre.model');
module.exports.genresControllers = {

    getGenres: async (req, res) => {
        const genres =  await Genres.find()
        res.json(genres)
     },
    
     postGenres: async (req, res) => {
        try {
            const genres = await Genres.create({
                genreName: req.body.genreName,
                genreDescription: req.body.genreDescription
            })
            res.json(genres)
        } catch (err) { res.json(err) }
    },


    deletegenres: async (req, res) => {
        await Genres.findByIdAndRemove(
            req.params.id
        )
        res.json('удален')
    },
}
