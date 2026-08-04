import { cadastroProd } from "../service/service.js"

const cProd = async (req, res) => {
    try {
        const { nome, preco, quantidade, tipo, validade } = req.body;

        if (!nome || !preco || !quantidade || !tipo || !validade) { // valida se os campos estão vazios
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            });
        }

        const resultado = cadastroProd({
            nome,
            preco,
            quantidade,
            tipo,
            validade
        });

        res.status(201).json({ //muda o status e manda um json
            mensagem: "produto cadastrado com sucesso",
        });
    } catch (error) {
        res.status(500).json({//muda o status e manda um json
            mensagem: error.message
        });
    }
}

export default cProd