const mongoose = require("mongoose");


//* can define the properties here if you want
const csvSchema = new mongoose.Schema({


} ,{strict:false});

module.exports = mongoose.models.csvfile || mongoose.model('csvfile', csvSchema);       //mongoose.model("csvfile", csvSchema)
