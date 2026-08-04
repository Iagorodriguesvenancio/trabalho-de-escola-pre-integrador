import { cadastroTipoProduto } from "../service/service.js"

const cTipoDeProduto = async (req, res) => {
    try {
        const {tipo } = req.body;

        if (!tipo) { // valida se os campos estão vazios
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            });
        }

        const resultado = cadastroTipoProduto({
            tipo
        });

        res.status(201).json({ //muda o status e manda um json
            mensagem: "tipo de produto cadastrado com sucesso",
        });
    } catch (error) {
        res.status(500).json({//muda o status e manda um json
            mensagem: error.message
        });
    }
}

export default cTipoDeProduto