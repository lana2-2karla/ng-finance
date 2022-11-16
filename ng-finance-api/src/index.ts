import express = require("express");
import { AppDataSource } from "./data-source";


AppDataSource.initialize().then(async () => {
    const app = express()

	app.use(express.json())

	app.listen(process.env.PORT, () => console.log(`ouvindo na porta ${process.env.PORT}`));


}).catch(error => console.log(error))
