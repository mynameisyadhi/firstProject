var express = require('express');
var router = express.Router();

let controller = require('../app/controller/ApiGetItems');

/* GET home page. */
router.get('/Api/getitems', controller.getItems);
// router.get('/user', controller.user);

module.exports = router;
