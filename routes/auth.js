const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));
const url = 'mongodb://localhost:27017/'
const databaseName = 'travel'
const MongoClient = require('mongodb').MongoClient



router.post('/',async(req, res)=>{
    var name =req.body.signname
    var id = req.body.signid
    var pass = req.body.signpass


    if(name != '' &&  id != '' && pass != ''){
        MongoClient.connect(url).then((client)=>{
            const connect = client.db(databaseName)
            const collection = connect.collection('travel')
        
            collection.insertOne({
                'name': name,
                'userId': id,
                'Password': pass
            })
            console.log('Insertion is Successfull.')
            
        })
    }
    else{
        
    }
} )

module.exports = router;