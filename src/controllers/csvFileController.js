const { Readable } = require('stream');
const csv =require("csv-parser")

const csvModel = require('../model/csvFile')


const uploadFile = async function(req,res){
    let file=req.files[0]
   
    
    const stream = Readable.from(file.buffer);
            stream.pipe(csv()).on("data",  async (data) => {
           
            csvModel.create(data)  

          });
            res.send("file uploaded successfully")


        }


module.exports= {uploadFile}