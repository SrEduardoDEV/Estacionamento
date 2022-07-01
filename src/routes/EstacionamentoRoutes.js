const router = require('express').Router();

const EstacionamentoController = require('../controllers/EstacionamentoController');

router.get('/relatorio', EstacionamentoController.list);
router.get('/caixa', EstacionamentoController.exibir_Caixa);
router.patch('/saida', EstacionamentoController.updateHoraSaida);
router.post('/', EstacionamentoController.create);

module.exports = router;