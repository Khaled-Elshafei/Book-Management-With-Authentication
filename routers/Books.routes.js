const router = require('express').Router()
const booksController = require('./controller/Books.controller')
const authntication = require('./controller/middlewares/Auth')


router.post('/addBooks',authntication,booksController.addBooks)
router.get('/getAllBooks',authntication,booksController.getOneBook)
router.put('/editOneBook/:id',authntication,booksController.editOneBook)
router.delete('/deleteOneBook/:id',authntication,booksController.deleteOneBook)


module.exports = router