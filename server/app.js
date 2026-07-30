import cors from "cors" // serve para configurar o servidor junto com o express
import express from "express";
import routeUser from "./src/routes/router.cadastroUser.js"; //importa a rota
import routerPro from "./src/routes/router.cadastroProd.js"; //importa a rota
import routerComp from "./src/routes/router.cadastroComp.js"; //importa a rota

const app = express();//configura o servidor

app.use(cors({ //configura o servidor
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type'] // Cabeçalhos permitidos 
}))

// middleware obrigatório
app.use(express.json());

// rotas
app.use("/cadastroUser", routeUser);
app.use("/cadastroProd", routerPro);
app.use("/cadastroComp", routerComp);

// servidor
app.listen(3000, () => {
    console.log("http://localhost:3000");
});