// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar framework express
const express     = require('express')
// obtener metodo Router
const api         = express.Router()
// importar controlador producto
const productCtrl = require('../controllers/product')

// method index
api.get('/product', productCtrl.getProducts)
// method show
api.get('/product/:productId', productCtrl.getProduct)
// method store
api.post('/product', productCtrl.saveProduct)
// method update
api.put('/product/:productId', productCtrl.updateProduct)
// method destroy
api.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = api