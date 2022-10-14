const mongoose = require("mongoose");

const carrierSchema = new mongoose.Schema({
    company_name:{
        type: String,
       
    }
})

module.exports = mongoose.models.carrier|| mongoose.model('carrier', carrierSchema);      //mongoose.model('carrier',carrierSchema)