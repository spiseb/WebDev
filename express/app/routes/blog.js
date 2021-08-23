var express = require('express');
var router = express.Router();


//Middleware function
function checkSomething(req, res, next) {
  if(process.env.SECRET == '12345') {
    console.log('Ran the middleware function CheckSomething()');
    next()
  }else {
    console.log('something went wrong here')
  }
}

/* GET home page. */
router.get('/', checkSomething,function(req, res) {
  res.render('blog', { title: 'Blog' });
});

module.exports = router;
