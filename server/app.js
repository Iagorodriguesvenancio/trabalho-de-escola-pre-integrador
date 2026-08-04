import cors from "cors" // serve para configurar o servidor junto com o express
import express from "express";

//cadastro
import routerTipoDeProduto from "./src/routes/router.cadastroTipoProduto.js"
import routeUser from "./src/routes/router.cadastroUser.js"; //importa a rota
import routerPro from "./src/routes/router.cadastroProd.js"; //importa a rota
import routerComp from "./src/routes/router.cadastroComp.js"; //importa a rota

//login
import routerLogin from "./src/routes/router.login.js"

//updates 
import routerCompra from "./src/routes/router.comprar.js"

const app = express();//configura o servidor

app.use(cors({ //configura o servidor
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'OPTIONS', "UPDATE"], // Métodos permitidos
  allowedHeaders: ['Content-Type'] // Cabeçalhos permitidos 
}))

//para usar json
app.use(express.json());

// rotas de cadastro
app.use("/cadastroUser", routeUser);
app.use("/cadastroProd", routerPro);
app.use("/cadastroComp", routerComp);
app.use("/cadastroTipoProduto", routerTipoDeProduto)


// rota de login
app.use("/login",routerLogin)

//rotas de updates 
app.use("/comprar",routerCompra)


// servidor
app.listen(3000, () => {
    console.log("http://localhost:3000");
});