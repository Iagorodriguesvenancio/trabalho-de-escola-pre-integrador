import { comprar } from "../service/service.js";

const cComprar = async(req,res) =>{
    try {
        const {estado,id_c} = req.body
        
        if(!estado || !id_c){
            return res.status(400).json({
                mensagem: "todos os campos são obrigadorios"
            })
        };
        const resultado = await comprar({estado,id_c})
        
        res.status(201).json({ //muda o status e manda um json
            funcionando: true,
            mensagem: "compra realizada com sucesso",
            token
        })
        
    
    } catch (error) {
         res.status(500).json({//muda o status e manda um json
            funcionando:false,
            mensagem: "erro ao comprar"
        });
    }
}

export default cComprar