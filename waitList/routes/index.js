var express = require('express');
var router = express.Router();
var model = require('../models/Player');

/* GET home page. */
router.get('/', function(req, res) {
  model.find(function(err,players){
    if(err){
      console.log(err);
    } else {
      console.log('get request made');
      console.log(req.body);
      res.render('index',{
        title:'CCG Poker Wait List',
        players:players
      });
    }
  });
});

router.post('/',function(req,res){
  model.create(req.body,function(err, player){
    if(err){
      console.log(err);
    } else {
      console.log('post request made!');
      res.redirect('/');
    }
  });
});

router.delete('/:id',function(req,res){
  model.findByIdAndRemove(req.params.id,req.body,function(err,player){
      if(err){
        console.log(err);
      } else {
        console.log(req.body);
        res.json(player);
      }
  });
});

module.exports = router;
