const Patient = require('../models/patient')
const patientsController = {}

patientsController.list = (res,req) => {
    Patient.find({user: req.user._id})
        .then((patients)=>{
            res.json(patients)
        })
        .catch((err)=>{
            res.json(err)
        })
}

patientsController.create = (req,res) => {
    const body = req.body
    const patient = new Patient(body)
    patient.user = req.user._id
    patient.save()
        .then((patient)=>{
            res.json(patient)
        })   
        .catch((err)=>{
            res.json(err)
        })
}

patientsController.show = (req,res) => {
    const id = req.params.id
    Patient.findOne({_id:id,user:req.user._id})
        .then((patient)=>{
            if(patient){
                res.json(task)
            }
            else{
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

patientsController.update = (req,res) => {
    const id = req.params.id
    const body = req.body 
    Patient.findOneAndUpdate({_id: id, user: req.user._id},body, {new: true, runValidators: true})
        .then((patient)=>{
            res.json(patient)
        })
        .catch((err)=>{
            res.json(err)
        })
}

patientsController.destory = (req,res) => {
    const id = req.params.id
    Patient.findOneAndDelete({_id: id, user: req.user._id})
        .then((patient)=>{
            res.json(patient)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = patientsController