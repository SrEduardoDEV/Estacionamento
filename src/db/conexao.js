const knex = require('knex');

const configuration = require('../../knexfile');

const conexao = knex(configuration.development);

module.exports = conexao;