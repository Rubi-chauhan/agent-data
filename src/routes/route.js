const express = require('express')
const router = express.Router()
const {uploadFile} = require('../controllers/csvFileController')
const {createUser ,getUsers, updateUsers, deleteUsers} = require('../controllers/userController')
const createAgent = require("../controllers/agentController");
const {createUserAccount, getUsersAccount, updateUsersAccount, deleteUsersAccount} = require("../controllers/accountController");
const createCarrier = require('../controllers/carrierController')
const createLob = require('../controllers/lobController');
const {createPolicy, getPolicy, updatePolicy, deletePolicy} = require("../controllers/policyController");

//******** uploading csv file into db *******/
router.post('/upload',  uploadFile)


//******** user *******/
router.post('/user', createUser);
router.get('/user',getUsers)
router.put('/user', updateUsers)
router.delete('/user', deleteUsers)



//********** account  ***********/
router.post('/user/account', createUserAccount)
router.get('/user/account',getUsersAccount)
router.put('/user/account', updateUsersAccount)
router.delete('/user/account', deleteUsersAccount)


//********** policy ********/
router.post('/policy', createPolicy)
router.get('/policy',getPolicy)
router.put('/policy', updatePolicy)
router.delete('/policy', deletePolicy)



router.post('/agent', createAgent)

router.post('/carrier', createCarrier)

router.post('/lob', createLob)


module.exports=router;


