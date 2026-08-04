import express from "express"

import cComprar from "../controller/controller.comprar.js"
const routerCompra = express.Router()

routerCompra.post("/", cComprar)

export default routerCompra