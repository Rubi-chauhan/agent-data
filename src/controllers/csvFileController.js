const { Readable } = require('stream');
const csv =require("csv-parser")

const csvModel = require('../model/csvFile')
const userModel =  require('../model/user')
const policyModel = require('../model/policy')
const lobModel = require('../model/lob')
const accountModel = require('../model/userAccount')
const carrierModel = require('../model/carrier')
const agentModel = require('../model/agent')


const uploadFile = async function(req,res){
    let file=req.files[0]

    
    const stream = Readable.from(file.buffer);
            stream.pipe(csv()).on("data",  async (data) => {
           
            await csvModel.create(data) 
            
            //* user collection
            let user ={
              userType:data.userType,
              email:data.email,
              gender:data.gender,
              firstname:data.firstname,
              city:data.city,
              phone:data.phone,
              address:data.address,
              state:data.state,
              zip:data.zip,
              dob:data.dob,
            }
            await userModel.create(user)

            //** policy collection */

           let  policy = {
             policy_mode:data.policy_mode,
             policy_number:data.policy_number,
              policy_start_date:data.policy_start_date,
              policy_end_date:data.policy_end_date,
              policy_type:data.policy_type,
              premium_amount:data.premium_amount
              }

              await policyModel.create(policy)

            //* lob collection

            let lob = {
              category_name : data.category_name
            }

            await lobModel.create(lob)


            //* user account collection

            let account = {
              account_name:data.account_name,
              account_type:data.account_type
            }
            await accountModel.create(account)

            //* carrier collection

            let carrier = {
              company_name:data.company_name
            }

           await carrierModel.create(carrier)

          
 
            

          });
            res.send("file uploaded successfully")


        }


module.exports= {uploadFile}