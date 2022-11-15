import express = require("express");
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    const app = express()

	app.use(express.json())

	return app.listen(`rodando na porta ${process.env.PORT}`)
    

}).catch(error => console.log(error))
