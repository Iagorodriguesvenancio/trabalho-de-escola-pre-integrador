import express from "express";
import cTipoDeProduto from "../controller/controller.cadastroTipoProduto.js"; //importa o controler user

const routerTipoDeProduto = express.Router();//configa o routerUser para poder ser usado como uma rota

routerTipoDeProduto.post("/", cTipoDeProduto);

export default routerTipoDeProduto;