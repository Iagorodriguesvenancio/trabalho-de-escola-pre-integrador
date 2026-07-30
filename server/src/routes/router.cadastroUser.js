import express from "express";
import cUser from "../controller/controller.cadastroUser.js"; //importa o controler user

const routeUser = express.Router();//configa o routerUser para poder ser usado como uma rota

routeUser.post("/", cUser);

export default routeUser;