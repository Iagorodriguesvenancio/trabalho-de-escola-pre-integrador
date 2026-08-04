import { cadastroComp } from "../service/service.js"

const cComp = async (req, res) => {
    try {
        const { id_u, id_p, quantidade, total, data_compra, pago} = req.body;

        if (!id_u || !id_p || !quantidade || !total || !data_compra || !pago) { // valida se os campos estão vazios
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            });
        }

        const resultado = cadastroComp({
            id_u,
            id_p,
            quantidade,
            total,
            data_compra,
            pago
        });

        res.status(201).json({ //muda o status e manda um json
            mensagem: "compra cadastrado com sucesso",
        });
    } catch (error) {
        res.status(500).json({//muda o status e manda um json
            mensagem: error
        });
    }
}

export default cComp