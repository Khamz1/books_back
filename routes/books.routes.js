const {Router} = require('express');
const route = Router();
const {booksControllers} = require('../controllers/book.controllers');

route.get('/books',booksControllers.getBooks);
route.get('/books/:id',booksControllers.getBooksById);
route.get('news/categorie/:id',booksControllers.getBooksByGenre)
route.post('/news',booksControllers.postBooks);
route.delete('/news/:id',booksControllers.deleteBooks);
route.patch('/news/:id',booksControllers.patchBooks);

module.exports=route