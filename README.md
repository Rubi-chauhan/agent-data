# agent-data

1) Create API to upload the attached XLSX/CSV data into MongoDB.
2) CRUD operation for User, Account, and Policy
3) Consider each info as a different collection in MongoDB (Agent, User, User's Account, LOB, Carrier, Policy).

## Installation
```bash
npm i
```

## packages used
```python
"dependencies": {
    "cors": "^2.8.5",
    "csv-parser": "^3.0.0",
    "csvtojson": "^2.0.10",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "fast-csv": "^4.3.6",
    "mongoose": "^6.6.5",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20"
  }
  ```
  
  ## request
  ```python
router.post('/upload',  uploadFile)
```
upload the file through postman

```python
router.post('/user', createUser);
router.get('/user',getUsers)
router.put('/user', updateUsers)
router.delete('/user', deleteUsers)
```
user collection crud operations

```python
router.post('/user/account', createUserAccount)
router.get('/user/account',getUsersAccount)
router.put('/user/account', updateUsersAccount)
router.delete('/user/account', deleteUsersAccount)
```
user's account CRUD operations

```python
router.post('/policy', createPolicy)
router.get('/policy',getPolicy)
router.put('/policy', updatePolicy)
router.delete('/policy', deletePolicy)
```
policy collection CRUD operation

```python
router.post('/agent', createAgent)

router.post('/carrier', createCarrier)

router.post('/lob', createLob)
  ```
  
  
  ## response
  In response it'll give you the modified data


## Created by
Rubi
