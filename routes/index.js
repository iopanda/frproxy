var FrpsConfig = require("../model/frps/FrpsConfig");

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
  res.render("index");
})

/* GET home page. */
router.get("/frps", function (req, res, next) {
  FrpsConfig.findOne({
    where: {
      id: 1,
    },
  }).then(r => {
    res.render("frps", r.dataValues);
  }, j=>{
    res.sendStatus(501);
  });
});

router.post("/frps", function(req, res, next) {
  console.log(req.body);
  res.redirect('/')
})

module.exports = router;
