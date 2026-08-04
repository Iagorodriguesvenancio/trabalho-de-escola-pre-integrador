import express from "express";
import cProd from "../controller/controller.cadastroProd.js"; //importa o controler user

const routerProd = express.Router();//configa o routerUser para poder ser usado como uma rota

routerProd.post("/", cProd);

export default routerProd;