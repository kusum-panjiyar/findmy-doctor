const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/findmy-doctor',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(()=>{
        console.log('connect to db')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = configureDB