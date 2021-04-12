const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const apiController = require('../controllers/api');

router.get('/get-api', asyncMiddleware(apiController.getApi));
// router.get('/create-api', asyncMiddleware(apiController.createApi));

module.exports = router;
