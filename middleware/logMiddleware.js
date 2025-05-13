function logMiddleware(req, res, next) {
    console.log()
    console.log("Nova requisição")
    console.dir(req.method + " " + req.url)
    const tempoInicio = Date.now()
    next()
    const tempoFim = Date.now()
    const tempoExecucao = tempoFim - tempoInicio
    console.log("Código de resposta: " + res.statusCode)
    console.log("Tempo de execução: " + tempoExecucao + "ms")
    console.log("----------------")
}

module.exports = logMiddleware