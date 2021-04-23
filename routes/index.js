module.exports = app => {
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

}