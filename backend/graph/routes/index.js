var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// sequelize-auto -o "./Models" -d graphs -h localhost -u root -p 8181  -e mysql
// sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER
