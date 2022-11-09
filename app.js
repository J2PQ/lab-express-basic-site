const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// DDBB Connection
require('./db/db.connection')
// Model
const Product = require('./models/Product.model')

app.get('/', (req, res) => {
  // res.render('index')

  // res.send('No Arriesgo')
  Product
    .find()
    .sort({ price: 1 })
    .select({
      title: 1,
      thumbnail: 1,
      price: 1,
    })
    .then(allProductsFromDB => {
      res.render('index', { Products: allProductsFromDB })
    })
    .catch(err => console.log(err))
})

app.listen(5005, () => console.log('APP LISTENING'))