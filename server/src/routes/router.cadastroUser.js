import express from "express"
import cUser from "../controller/controller.cadastroUser.js" 

const routeUser = express.Router()

routeUser.get("/",cUser)

export default routeUser 