const mongoose = require("mongoose");

const lobSchema = new mongoose.Schema({

      category_name:{
        type:String
    }
    
})

module.exports = mongoose.models.lob || mongoose.model('lob', lobSchema);      //mongoose.model('lob',lobSchema)