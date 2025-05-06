const express = require('express')
const produtoService = require("./service/produto_service")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>App funcionando!</h1>")
})

app.get('/produtos', (req, res) => {
    res.json(produtoService.listar())
})

app.post('/produtos', (req, res) => {
    let produto = req.body

    try {
        produtoService.inserir(produto)
        res.status(201).json(produto)
    } catch(err) {
        res.status(err.id).json(err)
    }
})

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        res.json(produtoService.buscarPorId(id))
    } catch(err) {
        res.status(err.id).json(err)
    }
})

app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let produto = req.body

    try {
        res.json(produtoService.atualizar(id, produto))
    } catch(err) {
        res.status(err.id).json(err)
    }
})

app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    try {
        res.json(produtoService.deletar(id))
    } catch(err) {
        res.status(err.id).json(err)
    }
})

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso!")
})

