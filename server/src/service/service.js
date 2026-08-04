import mysql2 from "mysql2"
import  jwt  from "jsonwebtoken"

const connection = mysql2.createConnection({ //inica o coneção com o xampp
    user: 'root',       // padrão do XAMPP
    password: '',
    database: 'veterinaria' //nome do banco de dados 
})


const generateToken = dado => jwt.sign({id:dado},"teste",{expiresIn: 60})

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

const cadastroTipoProduto = (dados) =>{
    connection.query(  //cria uma consulta para adicinar dados no sql
        "INSERT INTO tipo_produtos(tipo) VALUES (?) ", //comando sql
        [dados.tipo], // dados para o cadastro
        (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const login = (dados) =>{
    connection.query(
        "SELECT id,email,senha FROM `usuarios`",
          (erro,res) => {
            if (erro){
                 return erro;
            }else{
                for(let i=0;i<res.length;i++){
                    if(res[i].email == dados.email && res[i].senha == dados.senha){
                        return {
                            mensagem:"usuario  logado"
                        }
                    }
                }
                return {
                    mensagem:"senha ou email errados"
                }
            }
        }
    )
}

const comprar = (dados)=>{
     connection.query(
        "UPDATE compra SET pago=? WHERE id_c = ?",
        [dados.estado, dados.id_c],
         (erro) => {
            if (erro) return erro;
            return
        }
     )
}

const mudarDadosUsuario = (dados) =>{
    connection.query(
        "UPDATE usuarios SET nome=?,senha=?,endereco=?,adm=? WHERE id_u = ?",
        [dados.nome, dados.senha, dados.endereco,dados.adm,dados.id_u],
         (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const mudarDadosProdutos = (dados) =>{
    connection.query(
        "UPDATE produtos SET preco=?,quantidade=? WHERE id_p = ?",
        [dados.preco,dados.quantidadeFinal,dados.id_p],
        (erro) => {
            if (erro) return erro;
            return
        }
    )
}

const pegarDadosProdutos = () =>{
    connection.query(
        "SELECT  nome, preco, quantidade, tipo, validade FROM `produtos` ",
         (erro, resultados) => {
            if (erro) return res.status(500).json(erro);

            return resultados
        }
    )
} 


export { cadastroUser, cadastroProd, cadastroComp, cadastroTipoProduto, login, generateToken, comprar, mudarDadosUsuario, mudarDadosProdutos, pegarDadosProdutos}