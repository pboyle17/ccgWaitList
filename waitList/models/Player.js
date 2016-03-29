var mongoose = require('mongoose');

// ingredients, type, toppings, syrup, instructions, time
var PlayerSchema = new mongoose.Schema({
  name: String,
  game: String,
  time: Date
});

module.exports = mongoose.model('Player', PlayerSchema);
