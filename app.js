const express = require('express')
const produtoRouter = require('./router/produto_router')
const logMiddleware = require('./middleware/logMiddleware')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>App funcionando!</h1>")
})

app.use(logMiddleware)
app.use('/produtos', produtoRouter)

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso!")
})

