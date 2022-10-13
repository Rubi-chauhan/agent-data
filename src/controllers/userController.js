//todo create User
//todo get User by email
//todo update user data
//todo delete user data 


const csvModel = require('../model/csvFile')
const userModel = require('../Model/user')


const createUser = async (req,res)=>{
    try {
        const getCsvData = await csvModel.find()
        // console.log(getCsvData)
    
        for(let i=0; i<getCsvData.length; i++){
            let userData = {
                userType:getCsvData[i].userType,
                email:getCsvData[i].email,
                gender:getCsvData[i].gender,
                firstname:getCsvData[i].firstname,
                city:getCsvData[i].city,
                phone:getCsvData[i].phone,
                address:getCsvData[i].address,
                state:getCsvData[i].state,
                zip:getCsvData[i].zip,
                dob:getCsvData[i].dob,
            }
        
             await userModel.create(userData)
    
            }
            res.status(201).send({message:'user data created'})
        
    } catch (err) {
        res.status(500).send({error:err.message})
        
    }

}

const getUsers = async(req,res)=>{
    try {
        let email= req.query.email

        const getUserData = await userModel.findOne(email)
        if(!getUserDta){
            res.status(400).send(`No user exist with this ${email} address`)
        }
        res.status(200).send({status:true, message:`${email} data successfully fetched`, data:getUserData})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const updateUsers = async(req,res)=>{
    try {
        let email = req.params.email
        let data = req.body

        const checkUserExist = userModel.findOne(email)
        if(!checkUserExist){
            res.status(400).send(`No user exist with this ${email} address`)
        }

        const updatedData = await userModel.findOneAndUpdate(email, data, {new:true})

        res.status(200).send({status:true, message:'user data updated sucessfully', data:updatedData})

        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const deleteUsers = async(req,res)=>{
    try {
        let email = req.params.email

        const checkUserExist = userModel.findOne(email)
        if(!checkUserExist){
            res.status(400).send(`No user exist with this ${email} address`)
        }

        const deletedUser = await userModel.deleteOne(email)
        res.status(200).send({status:true, message:'user data deleted successfully', data:deletedUser})
        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = {createUser ,getUsers, updateUsers, deleteUsers }