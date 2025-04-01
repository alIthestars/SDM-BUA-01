const express = require ('express');
const app = express();

app.use(express.json());

let users = []
let pedidos = []

// rota para cadastrar usuario

app.post('/user', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({message: 'Usuário cadastrado com sucesso!', user});
});

app.get('/user_data', (req, res) => {
    res.send({users});
});

app.post('/pedido', (req, res) => {
    const pedido  = req.body;
    pedidos.push(pedido);
    res.send({message: 'Pedido cadastrado com sucesso!', pedido});
});

app.get('/pedido_data', (req, res) => {
    res.send({pedidos});
});

app.get('/all_data',(req, res) => {
    res.send({users, pedidos});
});

app.listen(3000, () => {
    console.log('Servidor monolítico rodando na porta 3000');
});
