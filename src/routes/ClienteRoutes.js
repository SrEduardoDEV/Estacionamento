const router = require('express').Router();

const ClienteController = require('../controllers/ClienteController');

router.get('/', ClienteController.list);
router.post('/', ClienteController.create);

module.exports = router;
