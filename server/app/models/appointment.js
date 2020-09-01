const mongoose = require('mongoose')

const Schema = mongoose.Schema
const appointmentSchema = new Schema({
    date: {
        type: Date
    },
    name: {
        type: String,
        required: [true,'name is reduired']
    },
    email:{
        type: String
    },
    contact: {
        type: String 
    },
    specialist: {
        type: String,
        required: [true,'specialist is required']
    },
    description: {
        type: String
    },
    slot: {
        type: String
    },
    status: {
        type: String
    }
})

const Appointment = mongoose.model('Appointiment',appointmentSchema)

module.exports = Appointment