const mongoose = require('mongoose')
const Schema = mongoose.Schema
const booksSchema = new Schema({
    name:String,
    author:String,
    description:String,
    price:Number
})
module.exports = mongoose.model('Books',booksSchema)