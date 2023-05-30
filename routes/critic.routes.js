const {Router} = require('express');
const route = Router();
const {criticControllers} = require('../controllers/critic.controllers');

route.get('/critics',criticControllers.getCritics);
route.get('/critics/books/:id',criticControllers.getCriticsForOne);
route.post('/critics',criticControllers.postCritic);
route.delete('/critics/:id',criticControllers.deleteCritic)


module.exports=route