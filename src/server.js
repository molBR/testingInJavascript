const express = require('express')
const validate = require('express-validation')
class App {
  constructor () {
    console.log('oie')
    this.express = express()
    this.isDev = process.env.isDev !== 'production'

    this.middleware()
    this.routes()
    this.exception()
  }

  middleware () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }

  exception () {
    this.express.use((err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }
      return res.status(500).json({ error: 'erro no servidor' })
    })
  }
}

module.exports = new App()
