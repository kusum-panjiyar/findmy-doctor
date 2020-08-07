const express = require('express')
const app = express()
const routes = require('./config/routes')
const port = 3065
const cors = require('cors')
const configureDB = require('./config/database')
configureDB()

app.use(express.json())
app.use(cors())
app.use('/',routes)


app.listen(port,()=>{
    console.log('listening on port',port)
})