var express = require('express');
var router = express.Router();
var player = require('../models/Player');
var table = require('../models/Table');

/* GET home page. */
router.get('/', function(req, res) {

  player.find(function(err,players){
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
  player.create(req.body,function(err, player){
    if(err){
      console.log(err);
    } else {
      console.log('post request made!');
      res.redirect('/');
    }
  });
});

router.delete('/:id',function(req,res){
  player.findByIdAndRemove(req.params.id,req.body,function(err,player){
      if(err){
        console.log(err);
      } else {
        console.log(req.body);
        res.json(player);
      }
  });
});

router.get('/tables',function(req,res){
  table.find(function(err,tables){
    if(err){
      console.log(err);
    } else {
      res.render('tables',{
        title:'Cash Games Running',
        tables:tables
      });
    }
  });
});



module.exports = router;
