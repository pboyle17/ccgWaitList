var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/ccgWaitList';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('SHIP IT!!!!!! :D');
});


mongoose.connection.on('error', function(err) {
  console.log(err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Something went wrong!');
});
