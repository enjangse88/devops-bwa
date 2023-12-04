var express = require('express');
var router = express.Router();

const calculateHandler = require('./handlers/calculate');

router.get('/', function(req, res) {
  const {
    operator,
    number1,
    number2
  } = req.query;
  
  const result = calculateHandler.calculate(operator, number1, number2);
  res.json({ result });
});

module.exports = router;
