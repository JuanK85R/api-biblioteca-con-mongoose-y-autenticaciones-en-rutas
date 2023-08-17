const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./server/routes/router')
const authMiddeleware = require('./server/controllers/auth')

const port = 3000;

//ruta protegida    
// app.get('/recurso-protegido', authMiddeleware, (req, res) => {
//     res.send('¡Bienvenido al recurso secreto por la NASA!');
//   });
  // ruta  protegida adicional
//   app.get('/recurso-protegido/ruta-adicional', authMiddeleware, (req, res) => {
//     res.send('¡Esta es una nueva ruta adicional dentro del recurso protegido');
//   });

app.use(express.json())

app.use('/api', authMiddeleware)
app.use('/api', routes)

//CONEXION A MONGO
const mongoConnect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://JuanRM:JuanRM@cluster0.7s7f5yo.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }

    catch (err) {
        console.log(err)
    }
}
mongoConnect()
app.listen(port, () => {
    console.log(`Servidor esta en ejecucion en http://localhost:${port}`)
})

