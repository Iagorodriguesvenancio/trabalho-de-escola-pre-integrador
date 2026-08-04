import { mudarDadosUsuario } from "../service/service.js";

const cMudarDadosUsuario = async(req,res) =>{
    try {
        const {nome,senha,endereco,adm,id_u} = req.body
        
        if(!nome || !senha || !endereco || !adm || !id_u){
            return res.status(400).json({
                mensagem: "todos os campos são obrigadorios"
            })
        };
        const resultado = await mudarDadosUsuario({nome,senha,endereco,adm,id_u})
        
        res.status(201).json({ //muda o status e manda um json
            funcionando: true,
            mensagem: "dados atulizados com sucesso",
            token
        })
        
    
    } catch (error) {
         res.status(500).json({//muda o status e manda um json
            funcionando:false,
            mensagem: "erro ao mudar dados"
        });
    }
}

export default cMudarDadosUsuario