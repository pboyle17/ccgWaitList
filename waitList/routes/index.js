var express = require('express');
var router = express.Router();
var model = require('../models/Player');

/* GET home page. */
router.get('/', function(req, res) {
  model.find(function(err,players){
    if(err){
      console.log(err);
    } else {
      res.render('index',{
        title:'CCG Poker Wait List',
        players:players
      });
      console.log(players[0].game)
      for (var player in players) {
        console.log(players[player].name);
      }
      // res.json(players)
    }
  });
});

router.post('/',function(req,res){
  model.create(req.body,function(err, player){
    if(err){
      console.log(err);
    } else {
      res.json(player);
    }
  });
});

router.delete('/:id',function(req,res){
  model.findByIdAndRemove(req.params.id,req.body,function(err,player){
      if(err){
        console.log(err);
      } else {
        res.json(player);
      }
  });
});

module.exports = router;
