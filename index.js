const server = require('./src/server')
const port = process.env.PORT || 3000

server.express.listen(port)

console.log(`Escutando na porta ${port}`)
