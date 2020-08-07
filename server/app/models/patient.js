const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const PatientSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 4,

    },
    lastname: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return "invalid email formate"
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        maxlength: 10,
        minlength: 10,
        validate: {
            validator: function(value){
                return validator.isInt(value)
            },
            message: function(){
                return "invalid mobile number formate"
            }
        }
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    patientWeight:{
        type: String,
        required: true,
    },
    imageUrl: {
        type: String
    }
})

const Patient = mongoose.model("Patient",PatientSchema)
module.exports = {
    Patient
}