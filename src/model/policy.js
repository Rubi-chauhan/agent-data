const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    policy_mode: {
        type: String,
        
    },
    policy_number:{
        type: String,
        
    },
    premium_amount_written:{
        type: String,
        
    },
      premium_amount: {
        type: String,
        
    },
      policy_type: {
        type: String,
        
    },

    policy_start_date:{
        type: String,
        
    },
      policy_end_date:{
        type: String,
        
    },
    
})

module.exports = mongoose.models.policy || mongoose.model('policy', policySchema);        //mongoose.model('policy',policySchema)