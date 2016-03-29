var mongoose = require('mongoose');

var TableSchema = new mongoose.Schema({
  players: Number,
  game: String
});

module.exports = mongoose.model('Table',TableSchema);
