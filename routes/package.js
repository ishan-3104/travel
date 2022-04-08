const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));
const url = 'mongodb://localhost:27017/'
const databaseName = 'travel'
const MongoClient = require('mongodb').MongoClient



router.post('/',async(req, res)=>{
    var pName =req.body.pkgName
    var imgURL = req.body.pkgimgURL
    var days = req.body.pkgDays
    var description = req.body.pkgDescription
    var price = req.body.pkgPrice


    
        MongoClient.connect(url).then((client)=>{
            const connect = client.db(databaseName)
            const collection = connect.collection('package')
        
            collection.insertOne({
                'pName': pName,
                'imgURL': imgURL,
                'days': days,
                'description': description,
                'price': price
            })
            console.log('Insertion is Successfull.')
            
        })
    
    
} )

router.get('/fatch',(req,res)=>{

    MongoClient.connect(url).then((client)=>{
        const connect = client.db(databaseName)
        const collection = connect.collection('package')

        collection.find().toArray().then((ans)=>{
            
            res.send(ans)
        })
    })

})

module.exports = router;