var express = require('express');
var router = express.Router();
var controller = require('../Controllers/user.controller')

/* GET users listing. */
router.get('/',controller.getUser);
router.post('/',controller.createUSer);

module.exports = router;
