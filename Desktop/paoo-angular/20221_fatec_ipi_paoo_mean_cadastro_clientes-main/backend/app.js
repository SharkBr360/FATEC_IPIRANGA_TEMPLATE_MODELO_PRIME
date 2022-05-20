const express = require ('express')
const cors = require ('cors')
const app = express()
app.use(cors())
//req.body - pode ser tratado como objeto json
app.use(express.json())
const clientes = [
    {
        id: '1',
        nome: 'José',
        fone: '12345678',
        email: 'jose@email.com'
    },
    {
        id: '2',
        nome: "Antônio",
        fone: '98765432',
        email: 'antonio@email.com'
    }
]


//localhost:3000/api/clientes
app.get('/api/clientes', (req, res) => {
    res.status(200).json({
        mensagem: "Tudo OK",
        clientes: clientes
    })
})

//localhost:3000/api/clientes
app.post('/api/clientes', (req, res) => {
    console.log(req.body)
    res.status(201).json({mensagem: 'Cliente inserido'})
})

module.exports = app
