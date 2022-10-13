const csvModel = require('../model/csvFile')
const lobModel = require('../model/lob')


const createLob = async (req,res)=>{
    try {
        const getCsvData = await csvModel.find()

for(let i=0; i<getCsvData.length; i++){
    let lobData = {
        
   category_name : getCsvData[i].category_name
   }
   await lobModel.create(lobData)

}
       res.status(201).send({message:'lob data created'})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = createLob



