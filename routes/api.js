// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar framework express
const express     = require('express')
// obtener metodo Router
const api         = express.Router()
// importar el controlador empleado
const empleadoController = require('../controllers/EmpleadoController')

// method index
api.get('/empleado', empleadoController.getEmpleados)
// method show
api.get('/empleado/:empleadoId', empleadoController.getEmpleado)
// method store
api.post('/empleado', empleadoController.saveEmpleado)
// method update
api.put('/empleado/:empleadoId', empleadoController.updateEmpleado)
// method destroy
api.delete('/empleado/:empleadoId', empleadoController.deleteEmpleado)

module.exports = api