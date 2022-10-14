//todo create User
//todo get User by email
//todo update user data
//todo delete user data 


const csvModel = require('../model/csvFile')
const userModel = require('../Model/user')

//* data validations
const {isValidEmail, isValidPhone, isValidBody, enumGender, pincodeRegex, decimalNumRegex} = require('../utility/validation')



//! we can also add the data in user collection with logic if we don't wanna use Readable'stream'
//! lil bit slow but works definitely it is optional because we can directly add the data into different collections from CSV file while uploading the file using Stream 

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
        let email= req.params.email

        const getUserData = await userModel.findOne({email:email})
        if(!getUserData){
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

        if(!data){
            res.status(400).send(`Please enter some data for updation`)
        }

        if (!isValidBody(data.email) || !isValidEmail(data.email)) {
            return res.status(400).send({
              status: false,
              message: `Please! enter a valid email.`,
            });
          }

          if (!isValidBody(data.phone) || !isValidPhone(data.phone)) {
            return res.status(400).send({
              status: false,
              message: `Please!, enter a valid phone.`,
            });
          }

           //** format validation using regex
          if (!pincodeRegex.test(data.zip)) {
            return res
              .status(400)
              .send({ status: false, message: "Please provide a valid zip " });
          }


        const checkUserExist = userModel.findOne({email:email})
        if(!checkUserExist){
            res.status(400).send(`No user exist with this ${email} address`)
        }

        const updatedData = await userModel.findOneAndUpdate(email, data, {new:true})

        res.status(200).send({status:true, message:'user data updated successfully', data:updatedData})

        
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const deleteUsers = async(req,res)=>{
    try {
        let email = req.params.email

        const checkUserExist = userModel.findOne({email:email})
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