const {Router} = require('express');
const route = Router();
const {genresControllers} = require('../controllers/genres.controllers');

route.get('/genres',genresControllers.getGenres);
route.post('/genres',genresControllers.postGenres);
route.delete('/genres/:id',genresControllers.deletegenres);

module.exports = route