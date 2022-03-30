var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     value =Number(search_params.get("x"))
    if(value == 0)
    value=Math.random()
    res.write("Computes the values for Math.acosh and math.log1p function."+"\n")
    res.write('Math.acosh applied to '+value+" is "+Math.acosh(value)+"\n");
    res.write('Math.log1p applied to '+value+" is "+Math.log1p(value)+"\n");
    res.end('Math.tan applied to '+value+" is "+Math.tan(value));
 });

module.exports = router;