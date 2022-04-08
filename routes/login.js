const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));
const url = 'mongodb://localhost:27017/'
const databaseName = 'travel'
const MongoClient = require('mongodb').MongoClient
const session = require("session");


router.post('/', async(req, res)=>{
    var session = req.session
    var userId = req.body.loginuser
    var lPassword = req.body.loginPass
    console.log(userId)
    console.log(lPassword)

    if (userId != '' && lPassword != ''){
        MongoClient.connect(url).then((client)=>{
            const connect = client.db(databaseName)
            const collection = connect.collection('travel')
            
            collection.find({ "userId": userId })
                .toArray().then((ans) => {
                    if(userId !== '' && lPassword != '' && ans.length != 0){
                        if(ans[0].userId == userId && ans[0].Password == lPassword){
                            // session.userId = userId
                            // session.loginstatus = 'Login Successful.'
                            // loginStat.key = session.loginstatus
                            // loginStat.currentUser = session.userId
                            console.log("successful")
                        }
                        else{
                            // session.loginstatus = 'Enter Valid Credentials...!'
                            // loginStat.key = session.loginstatus
                            console.log("fail")
                        }
                    }
                    else{
                        // session.loginstatus = 'Enter Valid Data..!'
                        // loginStat.key = session.loginstatus
                        console.log('fail')
                    }
                }) 
        })   
    }
    else{
        // session.loginstatus = 'Enter Valid Data..!'
        // loginStat.key = session.loginstatus
        console.log('fai')
    }
    // console.log(loginStat)
})

module.exports = router;