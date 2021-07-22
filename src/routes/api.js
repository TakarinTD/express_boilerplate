const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const apiController = require('../controllers/api');

router.get('/apis/:apiId', asyncMiddleware(apiController.getApi));
router.post('/apis', asyncMiddleware(apiController.createApi));
router.get('/apis', asyncMiddleware(apiController.getApis));
router.put('/apis/:id', asyncMiddleware(apiController.updateApi));

module.exports = router;
