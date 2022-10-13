const csvModel = require('../model/csvFile')
const carrierModel = require('../model/carrier')


const createCarrier = async (req,res)=>{
    try {
        const getCsvData = await csvModel.find()

        for(let i=0; i<getCsvData.length; i++){
    
        let carrierData = {
       company_name:getCsvData[i].company_name
        }
        await carrierModel.create(carrierData)
    }
    
            res.status(201).send('policy carrier data created')
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = createCarrier