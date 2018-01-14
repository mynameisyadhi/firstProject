var express = require('express');
var controller = require('../controllers/controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // let getData = controller();
  controller(res);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
