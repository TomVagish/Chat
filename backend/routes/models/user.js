const mongoose = require('mongoose');
const uniqueValid = require('mongoose-unique-validator');
const userSchema  = mongoose.Schema({


   userEmail:{ type: String , require: true, unique: true },
   userPassword: { type: String , require: true},
   userName:{type: String, require: true, unique: true}

});

userSchema.plugin(uniqueValid);


module.exports =  mongoose.model('User',userSchema);
