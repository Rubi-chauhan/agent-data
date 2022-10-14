const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    agent: {
        type: String,
       
    },
    
})

module.exports = mongoose.models.agent || mongoose.model('agent', agentSchema);     //mongoose.model('agent',agentSchema)