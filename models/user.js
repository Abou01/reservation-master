var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// user Schema + (année naissance, lastname, firstname)
var UserSchema = mongoose.Schema({
  lastname:  { type: String, required: true },
  firstname: { type: String, required: true },
  email:     { type: String, required: true },
  username:  { type: String, required: true},
  password:  { type: String, required: true },
  birthDate: {type: Date, require:true}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;