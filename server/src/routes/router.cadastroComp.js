import express from "express";
import cComp from "../controller/controller.cadastroComp.js"; //importa o controler user

const routerComp = express.Router();//configa o routerUser para poder ser usado como uma rota

routerComp.post("/", cComp);

export default routerComp;