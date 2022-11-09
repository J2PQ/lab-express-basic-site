const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Title desconocido',
    minlength: 2,
    maxlength: 1000,
    trim: true,
    set: value => value.charAt(0).toUpperCase() + value.substring(1)
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 1,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  brand: {
    type: String,
    required: true,
    default: 'Marca desconocida',
    minlength: 2,
    maxlength: 100,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: [String]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product 