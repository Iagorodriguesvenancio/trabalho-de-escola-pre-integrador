import { login,generateToken } from "../service/service.js";

const cLogin = async(req,res) =>{
    try {
        const {email,senha} = req.body
        
        if(!email || !senha){
            return res.status(400).json({
                mensagem: "todos os campos são obrigadorios"
            })
        };
        const resultado = await login({email,senha})
        
        const token = generateToken(email)
        res.status(201).json({ //muda o status e manda um json
            funcionando: true,
            mensagem: "Usuário logado com sucesso",
            token
        })
        
    
    } catch (error) {
         res.status(500).json({//muda o status e manda um json
            funcionando:false,
            mensagem: "erro ao logar"
        });
    }
}

export default cLogin