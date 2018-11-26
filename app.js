/*
 * app.js: configuración de la aplicación
 */

// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar framework express
const express     = require('express')
// importar analizador de cuerpos de solicitud entrantes en un middleware
const bodyParser  = require('body-parser')
// inicializar variable de aplicacion
const app  = express()
// importar rutas api
const api  = require('./routes/api.js')
// permitir lectura de datos de url codificados de una solicitud http
app.use(bodyParser.urlencoded({ extended : false }))
// permitir lectura de datos json de una solicitud http
app.use(bodyParser.json())
// habilitar las rutas api definidas para nuestra aplicacion
app.use('/api', api)

module.exports = app