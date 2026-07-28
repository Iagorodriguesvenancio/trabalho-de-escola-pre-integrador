import express from "express"
import login from "../controller/controller.login.js"

const route = express.Router()

route.get("/:email&senha",login)

export default route 