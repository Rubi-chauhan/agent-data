const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    account_name: {
        type: String,
        required: true,
      },
      account_type: {
        type: String,
        required: true,
      }
    
})

module.exports = mongoose.model('account',accountSchema)