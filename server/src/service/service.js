import mysql2 from "mysql2"

const connection = mysql2.createConnection({ //inica o coneção com o xampp
    user: 'root',       // padrão do XAMPP
    password: '',
    database: 'veterinaria' //nome do banco de dados 
})

const cadastroUser = (dados) => {
    connection.query(  //cria uma consulta para adicinar dados no sql
        "INSERT INTO usuarios(nome, email, cpf, senha, endereco, adm) VALUES (?, ?, ?, ?, ?, ?)", //comando sql
        [dados.nome, dados.email, dados.cpf, dados.senha, dados.endereco, 0], // dados para o cadastro
        (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const cadastroProd = (dados) => {
    connection.query(  //cria uma consulta para adicinar dados no sql
        "INSERT INTO produtos(nome, preco, quantidade, tipo, validade) VALUES (?,?,?,?,?)", //comando sql
        [dados.nome, dados.preco, dados.quantidade, dados.tipo, dados.validade], // dados para o cadastro
        (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const cadastroComp = (dados)=>{
    connection.query(  //cria uma consulta para adicinar dados no sql
        "INSERT INTO compra(id_u, id_p, quantidade, total, data_compra, pago) VALUES (? ,? ,? ,? ,? ,?) ", //comando sql
        [dados.id_u, dados.id_p, dados.quantidade, dados.total, dados.data_compra,dados.pago], // dados para o cadastro
        (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const pegarDados = (tabela)=>{

}

const login = (dados) =>{

}

const comprar = (dados)=>{

}



export { cadastroUser, cadastroProd, cadastroComp}