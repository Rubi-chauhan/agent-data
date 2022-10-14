const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    account_name: {
        type: String,
        
      },
      account_type: {
        type: String,
        
      }
      //user: { type: ObjectId, ref: 'user'}
    
})

module.exports = mongoose.models.account || mongoose.model('account', accountSchema);          //mongoose.model('account',accountSchema)