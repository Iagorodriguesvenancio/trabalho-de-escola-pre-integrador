import express from "express"

//import route from "./src/routes/routes.login";
import routeUser from "./src/routes/router.cadastroUser.js";




const app = express()



//app.use("/loginUser",route)

app.use("/cadastroUser",routeUser)

//app.use("/cadastroProduto",)

//app.use("/cadastroCarinho",)

//app.use("/cadastroCompra",)

app.listen( () => console.log(`http://localhost:3000`));