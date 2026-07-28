import sql from "mysql2"

const login = () => {

}

const cadastroUser = (dados) =>{
    sql.query(
        "INSERT INTO usuarios(nome, email, cpf, senha, endereco) VALUES (? ,? ,? ,? ,? )",
        [dados.nome,dados.email,dados.cpf,dados.senha,dados.endereco],
        (erro) => {
            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

           res.status(201).json({
                mensagem: "Usuário cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    )
}

const cadastroProduto = () =>{

}

const cadastroLista = () => {

}

const cadastroCarinho = () =>{

}

export {login,cadastroUser,cadastroProduto,cadastroLista,cadastroCarinho}