var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')


/* GET users listing. */
router.get('/', function(req, res) {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(x => x.json())
  .then(data => { 
    console.log(data)
    res.render('users', {users: data});
  })

 
});

module.exports = router;
