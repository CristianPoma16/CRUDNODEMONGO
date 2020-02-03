var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://Black16:alexanderpoma16@cluster0-qq4lf.mongodb.net/Personas?retryWrites=true&w=majority')

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a mongodb');
})
module.exports=connection;
