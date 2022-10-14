const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userType:{
        type: String,
       
    },
      email: {
        type: String,
     
      },
      gender: {
        type: String,
      
      },
      firstname: {
        type: String,
      
      },
      city:{
        type: String,
    
      },

      phone: {
        type: String,

      },
      address: {
        type: String,

      },
      state: {
        type: String,

      },
      zip: {
        type: String,

      },
      dob: {
        type: String,

      }
    
})

module.exports = mongoose.models.user || mongoose.model('user', userSchema);          //mongoose.model('user',userSchema)