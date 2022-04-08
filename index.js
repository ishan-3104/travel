const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");
const auth = require('./routes/auth')
const login = require('./routes/login')
const package = require('./routes/package')
const gallery = require('./routes/gallery')



app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());




app.get('/',(req,res)=>{
    res.send("hello ishan")
}),

app.use('/auth', auth)
app.use('/login', login)
app.use('/package',package)
app.use('/gallery',gallery )
app.listen(5000,()=>{
    console.log("server is runig")
})
