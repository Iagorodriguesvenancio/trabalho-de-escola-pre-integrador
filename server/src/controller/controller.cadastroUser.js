import { cadastroUser } from "../service/service.js";
const cUser = async (req,res) =>{
    try {   
        const {nome, email, cpf, senha, endereco} = req.body
        
        await cadastroUser([nome,email,cpf,senha,endereco])
        
       res.resd("usuario cadastrado")
    } catch (error) {
        res.status(500).send(error);
    }
}

export default cUser