const Appointment = require('../models/appointment')
const appointmentController = {}

appointmentController.post =(req,res) => {
    const body = req.body
    const appointment = new Appointment(body)
    appointment.userId = req.userId
    appointment.save()
        .then((appointment) => {
            res.json(appointment)
        })
        .catch((err) => {
            res.json(err)
        })
}

appointmentController.get=(req,res) => {
    //const body = req.body
    Appointment.find({})
        .then((appointment)=> {
            res.json(appointment)
        })
        .catch((err) => {
            res.json(err)
        })
}

appointmentController.update = (req,res) =>{
    const id = req.params.id
    const body = req.body 
    Appointment.findByIdAndUpdate(id,body,{new: true, runValidators: true})
        .then((appointment) => {
            res.json(appointment)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = appointmentController