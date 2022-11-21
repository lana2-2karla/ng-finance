/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import 'express-async-errors'
import express = require('express')
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import routes from './routes/router'

AppDataSource.initialize().then(async () => {
  const app = express()

  app.use(express.json())

  app.use(routes)

  app.use(errorMiddleware)

  app.listen(process.env.PORT, () => console.log(`ouvindo na porta ${process.env.PORT}`))
})
