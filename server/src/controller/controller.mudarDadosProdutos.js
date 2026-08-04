import { mudarDadosProdutos,pegarDadosProdutos } from "../service/service.js";

const cMudarDadosProdutos = async(req,res) =>{
    try {
        const {preco,quantidadeComprada,id_u} = req.body

        const dados = pegarDadosProdutos()
        
        if(!preco || !quantidadeComprada || !id_u){
            return res.status(400).json({
                mensagem: "todos os campos são obrigadorios"
            })
        };

        const quantidadeFinal = dados.quantidade - quantidadeComprada
        const resultado = await mudarDadosProdutos({preco,quantidadeFinal,id_u})
        
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

export default cMudarDadosProdutos