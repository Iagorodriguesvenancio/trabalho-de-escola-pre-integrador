import { cadastroUser } from "../service/service.js";// importa o cadastroUser do service 

const cUser = async (req, res) => {
    try {
        const { nome, email, cpf, senha, endereco } = req.body; //pega as informações do fetch pelo medoto post

        // validação simples
        if (!nome || !email || !cpf || !senha || !endereco) { // valida se os campos estão vazios
            return res.status(400).json({
                erro: "Todos os campos são obrigatórios"
            });
        }

        const resultado =  cadastroUser({
            nome,
            email,
            cpf,
            senha,
            endereco
        });

        res.status(201).json({ //muda o status e manda um json
            mensagem: "Usuário cadastrado com sucesso", 
        });

    } catch (error) { 
        res.status(500).json({//muda o status e manda um json
            erro: error.message
        });
    }
};

export default cUser; //exporta o cUser para ser usado no router