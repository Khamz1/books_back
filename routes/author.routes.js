const {Router} = require('express');
const route = Router();
const {authorsControllers} = require('../controllers/authors.conroller');

route.get('/authors',authorsControllers.getAuthors);
route.post('/authors',authorsControllers.postAuthor);

module.exports=route