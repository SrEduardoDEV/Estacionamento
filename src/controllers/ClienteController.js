const conexao = require('../db/conexao');

module.exports = class ClienteController {

    static async list(req,res) {

        const resultado = await conexao('clientes').select('*')

        return res.status(200).json(resultado);
    }


    static async create(req,res) {

        const dadosCliente = req.body;

        await conexao('clientes').insert(dadosCliente).then((resultado)=>{
            return res.status(201).json(resultado);
        }).catch((err)=> {
            console.log(err);
            return res.status(400).json({error: 'Não foi possivel cadastrar o cliente'});
        });
        
    }
}