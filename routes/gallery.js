const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));
const url = 'mongodb://localhost:27017/'
const databaseName = 'travel'
const MongoClient = require('mongodb').MongoClient


router.post('/',async(req,res)=>{
    var Gimg = req.body.GalleryImg

    MongoClient.connect(url).then((client)=>{
        const connect = client.db(databaseName)
        const collection = connect.collection('Gallery')
    
        collection.insertOne({
            'photo': Gimg
        })
        console.log('Insertion is Successfull.')
        
    })

})
router.get('/fatch',async(req,res)=>{


    MongoClient.connect(url).then((client)=>{
        const connect = client.db(databaseName)
        const collection = connect.collection('Gallery')

        collection.find().toArray().then((ans)=>{
            
            res.send(ans)
        })
    })
})

module.exports = router;