import express from "express"

import cLogin from "../controller/controller.login.js"
const routerLogin = express.Router()

routerLogin.post("/", cLogin)

export default routerLogin