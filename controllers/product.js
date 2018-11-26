// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar modelo producto
const Product = require('../models/product')

function getProducts(req, res)
{
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
		if (!products) return res.status(404).send({message: `No existen productos`})
	
		res.status(200).send({ products : products })		
	})	
}

function getProduct(req, res)
{
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
		if (!product) return res.status(404).send({message: `El producto no existe`})

		res.status(200).send({ product : product })			
	})
}

function saveProduct(req, res)
{
	console.log('POST /api/product')
	console.log(req.body)

	let product         = new Product()
	product.name        = req.body.name
	product.picture     = req.body.picture
	product.price       = req.body.price
	product.category    = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if (err) res.status(500).send({message: `Error de inserción: ${err}`})

		res.status(200).send({product: productStored})
	})
}

function updateProduct(req, res)
{
	let productId = req.params.productId
	let params    = req.body

	// actualizar producto 
	Product.findByIdAndUpdate(productId, params, (err, currentProduct) => {
		// si ocurrió un error
		if (err) return res.status(500).send({message: `Error de actualización: ${err}`})
		// obtener producto actualizado
		Product.findById(productId, (err, productUpdated) => {
			if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
			// retornar producto
			res.status(200).send({ product : productUpdated })			
		})
	})		
}

function deleteProduct(req, res)
{
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if (err) return res.status(500).send({message: `Error de eliminación: ${err}`})
		
		product.remove(err => {
			if (err) return res.status(500).send({message: `Error de eliminación: ${err}`})

			res.status(200).send({message: `Producto eliminado con éxito`})
		})		
	})		
}

module.exports = {
	getProducts,
	getProduct,
	saveProduct,
	updateProduct,
	deleteProduct	
}