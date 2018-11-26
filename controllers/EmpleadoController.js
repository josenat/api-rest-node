// habilitar nuevos tipos de variables ECMAScript 6
'use strict'
// importar modelo empleado
const Empleado = require('../models/Empleado')

function getEmpleados(req, res)
{
	Empleado.find({}, (err, empleados) => {
		if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
		if (!empleados) return res.status(404).send({message: `No existen empleados`})
	
		res.status(200).send({ empleados : empleados })		
	})	
}

function getEmpleado(req, res)
{
	let empleadoId = req.params.empleadoId

	Empleado.findById(empleadoId, (err, empleado) => {
		if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
		if (!empleado) return res.status(404).send({message: `El empleado no existe`})

		res.status(200).send({ empleado : empleado })			
	})
}

function saveEmpleado(req, res)
{
	let empleado = new Empleado()
	// si existe el parametro nombre en la solicitud
	if (req.body.nombres) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.nombres = (/^\s*$/.test(req.body.nombres)) ? empleado.nombres : req.body.nombres
	}
	// si existe el parametro apellidos en la solicitud
	if (req.body.apellidos) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.apellidos = (/^\s*$/.test(req.body.apellidos)) ? empleado.apellidos : req.body.apellidos
	}
	// si existe el parametro id_persona en la solicitud
	if (req.body.id_persona) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.id_persona = (/^\s*$/.test(req.body.id_persona)) ? empleado.id_persona : req.body.id_persona
	}
	// si existe el parametro nro_personal en la solicitud
	if (req.body.nro_personal) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.nro_personal = (/^\s*$/.test(req.body.nro_personal)) ? empleado.nro_personal : req.body.nro_personal
	}
	// si existe el parametro cod_unidad en la solicitud
	if (req.body.cod_unidad) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.cod_unidad = (/^\s*$/.test(req.body.cod_unidad)) ? empleado.cod_unidad : req.body.cod_unidad
	}
	// si existe el parametro cod_cargo en la solicitud
	if (req.body.cod_cargo) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.cod_cargo = (/^\s*$/.test(req.body.cod_cargo)) ? empleado.cod_cargo : req.body.cod_cargo
	}
	// si existe el parametro correo en la solicitud
	if (req.body.correo) {
		// y si está vacío guardamos valor por defecto del modelo de datos
		empleado.correo = (/^\s*$/.test(req.body.correo)) ? empleado.correo : req.body.correo
	}
	
	empleado.save((err, empleadoStored) => {
		if (err) res.status(500).send({message: `Error de inserción: ${err}`})

		res.status(200).send({empleado: empleadoStored})
	})
}

function updateEmpleado(req, res)
{
	let empleadoId = req.params.empleadoId
	let params    = req.body

	// actualizar empleado 
	Empleado.findByIdAndUpdate(empleadoId, params, (err, currentEmpleado) => {
		// si ocurrió un error
		if (err) return res.status(500).send({message: `Error de actualización: ${err}`})
		// obtener empleado actualizado
		Empleado.findById(empleadoId, (err, empleadoUpdated) => {
			if (err) return res.status(500).send({message: `Error de consulta: ${err}`})
			// retornar empleado
			res.status(200).send({ empleado : empleadoUpdated })			
		})
	})		
}

function deleteEmpleado(req, res)
{
	let empleadoId = req.params.empleadoId

	Empleado.findById(empleadoId, (err, empleado) => {
		if (err) return res.status(500).send({message: `Error de eliminación: ${err}`})
		
		empleado.remove(err => {
			if (err) return res.status(500).send({message: `Error de eliminación: ${err}`})

			res.status(200).send({message: `Empleado eliminado con éxito`})
		})		
	})		
}

module.exports = {
	getEmpleados,
	getEmpleado,
	saveEmpleado,
	updateEmpleado,
	deleteEmpleado	
}