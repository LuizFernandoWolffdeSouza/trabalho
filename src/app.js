import express from "express"
import dotenv from "dotenv"
import conexao from "./config/configdb.js"
import expedition from "./routers/expeditionrouter.js"
import explorer from "./routers/explorerouter.js"
import species from "./routers/speciesrouter.js"

const app = express()
app.use(express.json())
dotenv.config()

conexao()

app.use("/expedition", expedition)
app.use("/explore", explorer)
app.use("/species", species )
,

app.listen( 3000, () => console.log("Servidor rodando aqui na porta" ,3000))