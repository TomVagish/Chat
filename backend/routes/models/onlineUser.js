const mongoose = require('mongoose');
const uniqueValid = require('mongoose-unique-validator');


const onlineUserSchema  = mongoose.Schema({

   userName:{ type: String , require: true},
   room: { type: String , require: true},

});

onlineUserSchema.plugin(uniqueValid);


module.exports =  mongoose.model('onlineUser',onlineUserSchema);
