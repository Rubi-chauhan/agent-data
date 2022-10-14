const csvModel = require('../Model/csvFile')
const accountModel = require('../Model/userAccount')


const createUserAccount = async (req,res)=>{
    try {
        const getCsvData = await csvModel.find()

        for(let i=0; i<getCsvData.length; i++){
        let userAccountData = {
            account_name:getCsvData[i].account_name,
            account_type:getCsvData[i].account_type
        }
        await accountModel.create(userAccountData)
    }
            res.status(201).send({message:'user data created'})
        
    }  catch (err) {
        res.status(500).send({error:err.message})
    }

}

const getUsersAccount = async(req,res)=>{
    try {
        let accountname= req.params.accountname

        const checkAccount = await accountModel.findOne({account_name:accountname})
        if(!checkAccount){
            res.status(400).send({status:false, message:`No account details found with this ${accountname}`})
        }

        res.status(200).send({status:true, message:`account details of ${accountname}`, data:checkAccount})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const updateUsersAccount = async(req,res)=>{
    try {
        let accountname= req.params.accountname
        let data = req.body


        const checkAccount = await accountModel.findOne({account_name:accountname})
        if(!checkAccount){
            res.status(400).send({status:false, message:`No account details found with this ${accountname}`})
        }

        let updatedAccount = await accountModel.findOneAndUpdate(accountname, data, {new:true})
        res.status(200).send({status:true, message:`account details updated successfully `, data:updatedAccount})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const deleteUsersAccount = async(req,res)=>{
    try {
        let accountname= req.params.accountname

        const checkAccount = await accountModel.findOne({account_name:accountname})
        if(!checkAccount){
            res.status(400).send({status:false, message:`No account details found with this ${accountname}`})
        }

        const deleteAccount = await accountModel.deleteOne({account_name:accountname})
        res.status(200).send({status:true, message:`account details deleted successfully`, data:deleteAccount})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = {createUserAccount, getUsersAccount, updateUsersAccount, deleteUsersAccount}