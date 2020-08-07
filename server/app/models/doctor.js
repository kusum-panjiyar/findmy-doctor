const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const doctorSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 4
    },
    lastname: {
        type: String,
        required: true,

    },
    dob: {
        type: Date,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email formate'
            }
        }
    },
    mobile : {
        type: String,
        required:true,
        unique: true,
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function(value){
                return validator.isInt(value)
            },
            message: function(){
                return "invalid mobile number formate"
            }
        }
    },
    qualification : {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128

    },
    specialization: {
        type: String,
        required: true,
        minlength: 4,
        maxlength:50
    },
    clinicLocation: {
        type: String,
        required: true,
        maxlength:300
    },
    clinicTiming: {
        type: Date,
        required: true
    },
    imageUrl: {
        type: String
    }

})

const Doctor = mongoose.model("Doctor",doctorSchema)
module.exports = {
    Doctor
}