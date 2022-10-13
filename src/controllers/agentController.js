const csvModel = require('../Model/csvFile')
const agentModel = require('../Model/agent')


const createAgent = async (req,res)=>{
    try {
        const getCsvData = await csvModel.distinct('agent')  //* unique agent data

        for(let i=0; i<getCsvData.length; i++){

                let agentData = {}
                agentData.agent=getCsvData[i]
               await agentModel.create(agentData)

        }
            res.status(201).send('agent data created')
        
    }  catch (err) {
        res.status(500).send({error:err.message})
    }
        
    }

module.exports = createAgent