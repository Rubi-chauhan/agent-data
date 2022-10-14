const csvModel = require('../model/csvFile')
const policyModel = require('../model/policy')


const createPolicy = async (req,res)=>{
    try {
        const getCsvData = await csvModel.find()

        let policyData;
        for(let i=0; i<getCsvData.length; i++){
    
            policyData = {
            policy_mode:getCsvData[i].policy_mode,
            policy_number:getCsvData[i].policy_number,
            policy_start_date:getCsvData[i].policy_start_date,
            policy_end_date:getCsvData[i].policy_end_date,
            policy_type:getCsvData[i].policy_type,
            premium_amount:getCsvData[i].premium_amount
            }
    
        }
        const policyCreated = await policyModel.create(policyData)
        res.status(201).send({message:'policy data created', data:policyCreated})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
 
}


const getPolicy = async(req,res)=>{
    try {
        let policynumber = req.params.policynumber

        const policyData = await policyModel.findOne({policy_number:policynumber})
        if(!policyData){
            res.status(400).send({status:false, message:`No policy plan exist with this ${policynumber}`})
        }

        res.status(200).send({status:true, message:'policy details fetched successfully', data:policyData})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const updatePolicy = async(req,res)=>{
    try {
        let policynumber = req.params.policynumber

        let data = req.body

        const checkPolicy = policyModel.findOne({policy_number:policynumber})
        if(!checkPolicy){
            res.status(400).send(`No policy exist with this ${policynumber}`)
        }

        const updatedPolicy = await policyModel.findOneAndUpdate(policynumber, data, {new:true})

        res.status(200).send({status:true, message:'policy data updated sucessfully', data:updatedPolicy})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const deletePolicy = async(req,res)=>{
    try {
        let policynumber = req.params.policynumber

        const checkPolicy = policyModel.findOne({policy_number:policynumber})
        if(!checkPolicy){
            res.status(400).send(`No policy exist with this ${policynumber}`) 
        }

        const deletedPolicy = await policyModel.deleteOne({policy_number:policynumber})

        res.status(200).send({status:true, message:'policy data deleted sucessfully', data:deletedPolicy})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = {createPolicy, getPolicy, updatePolicy, deletePolicy}