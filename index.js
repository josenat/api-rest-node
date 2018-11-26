// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar el driver para conectar y manejar bases de datos
const mongoose    = require('mongoose')
// importar variable de aplicacion
const app  = require('./app')
// importar configuraciones
const config = require('./config') //const port = process.env.PORT || 3001

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
	if (err) {
		console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexion exitosa a la base de datos')
	
	app.listen(config.port, () => {
		console.log(`API REST corriendo en http://localhost:${config.port}`)
	})
})
