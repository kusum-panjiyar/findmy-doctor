const Doctor = require('../models/doctor')
const multer = require('multer')
const doctorsController = {}

var upload = multer({dest: "uploads/"})

doctorsController.list = (req,res) =>{
    Doctor.find({user: req.user._id})
        .then((doctors)=>{
            res.json(doctors)
        })
        .catch((err)=>{
            res.json(err)
        })
}

doctorsController.create = (req,res) => {
    const body = req.body
    const doctor = new Doctor(body)
    doctor.user = req.user._id
    doctor.save()
        .then((doctor)=>{
            res.json(doctor)
        })
        .catch((err)=>{
            res.json(err)
        })

}

doctorsController.show = (req,res) =>{
    const id = req.params.id
    Doctor.findOne({_id: id, user: req.user._id})
        .then((doctor)=>{
            if(doctor){
                res.json(doctor)
            }
            else(
                res.json({})
            )
        })
        .catch((err)=>{
            res.json(err)
        })
}

doctorsController.update = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Doctor.findOneAndUpdate({_id: id, user: req.user._id},body,{new: true, runValidators: true})
        .then((doctor)=>{
            res.json(doctor)
        })
        .catch((err)=>{
            res.json(err)
        })
}

doctorsController.destroy = (req,res) => {
    const id = req.params.id
    Doctor.findOneAndDelete({_id: id, user: req.user._id})
        .then((doctor)=>{
            res.json(doctor)
        })
        .catch((err)=>{
            res.json(err)
        })
}


module.exports = doctorsController