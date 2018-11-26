'use strict'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const EmpleadoSchema = Schema ({
	nombres      : { type : String, default : 'Salomon'  },
	apellidos    : { type : String, default : 'Martinez' },
	id_persona   : { type : String, default : '12852963' },
	nro_personal : { type : Number, default : 10008056   },
	cod_unidad   : { type : Number, default : 50157493   },
	cod_cargo    : { type : Number, default : 1160       },
	correo       : { type : String, default : 'correo.empresa@mail.com' }
})

// exportar modelo (nombreModelo, nombreEsquema)
module.exports = mongoose.model('Empleado', EmpleadoSchema)