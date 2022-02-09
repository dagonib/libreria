const express = require('express')
const { getAllBooks } = require('../controller/BookController')
const router = express.Router()

router.route('/books').get(getAllBooks)

module.exports = router