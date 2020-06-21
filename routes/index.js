const {Router} = require('express');
const router = Router();
const books = require('./book.route');
const authors = require('./authors.route');
const authorsBooks = require('./authbook.route');

router.use('/api', books);

router.use('/api', authors);

router.use('/api', authorsBooks);

module.exports= router;