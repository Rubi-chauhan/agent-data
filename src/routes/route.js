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
router.get('/user/:email',getUsers)
router.put('/user/:email', updateUsers)
router.delete('/user/:email', deleteUsers)



//********** account  ***********/
router.post('/user/account', createUserAccount)
router.get('/user/:accountname',getUsersAccount)
router.put('/user/:accountname', updateUsersAccount)
router.delete('/user/:accountname', deleteUsersAccount)


//********** policy ********/
router.post('/policy', createPolicy)
router.get('/policy/:policynumber',getPolicy)
router.put('/policy/:policynumber', updatePolicy)
router.delete('/policy/:policynumber', deletePolicy)



router.post('/agent', createAgent)

router.post('/carrier', createCarrier)

router.post('/lob', createLob)


module.exports=router;


