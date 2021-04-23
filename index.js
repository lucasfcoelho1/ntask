const express = require('express')
const PORT = 3000

const app = express()

app.get('/', (req, res) => res.json({
    status: 'NTask API'
}))

app.get('/tasks', (req, res) => 
    res.json({
        tasks: [
            {title: 'Fazer compras'},
            {title: 'Limpar o pc'}
        ]
    }

))

app.listen(PORT, () => 
    console.log(`NTask API - Porta ${PORT}`))