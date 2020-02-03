var mongoose = require('mongoose'),
    Schemas = mongoose.Schema,
    object_id = mongoose.Schema.ObjectId;

var usersSchemas = new Schemas({
  _id: { type: object_id, auto: true },
  dni: { type: String, trim: true,unique:true },
  apellidos: { type: String, trim: true },
  nombre: { type: String, trim: true },
  direccion: { type: String, trim: true },
  telefono: { type: String, trim: true }
});

var users = mongoose.model('estudiantes', usersSchemas);

module.exports = users;

