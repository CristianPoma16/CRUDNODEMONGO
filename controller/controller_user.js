var users = require('../model/users'),
    express = require('express'),
    router = express.Router();

router.post('/search', (req, res) => {    
    var body=req.body;
    users.find({ dni: body.dni }, (err, docs) => {
        if (err) {            
            console.error(err)
            throw err
        }
        res.status(200).json(docs)
    })
}).post('/all', (req, res) => {
    users.find({}, (err, docs) => {
        if (err) {            
            console.error(err)
            throw err
        }
        res.status(200).json(docs)
    })
}).post('/create', (req, res) => {    
    var body=req.body;
    users.insertMany({ 
        dni: body.dni,
        apellidos: body.apellidos,
        nombres: body.nombres,
        direccion: body.direccion,
        telefono: body.telefono
     },
         (err, rest) => {
            if (err) {
                console.error(err)
                throw err
            }
            res.status(200).json(rest)
        })
}).post('/update', (req, res) => {    
    var body=req.body;
    users.update({ dni: body.dni },
        {$set: {
                apellidos: body.apellidos,
                nombres: body.nombres,
                direccion: body.direccion,
                telefono: body.telefono
            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err
            }
            res.status(200).json(rest)
        })
}).post('/delete',(req,res)=>{    
    var body=req.body;
    users.remove({dni:body.dni},(err,rest)=>{
        if (err) {
            console.error(err)
            throw err
        }
        res.status(200).json(rest)
    })
})

module.exports = router