const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController =require('../app/controllers/usersController')
const doctorsController = require('../app/controllers/doctorsController')
const patientsController = require('../app/controllers/patientsController')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/accounts',authenticateUser,usersController.account)

router.get('/doctors',authenticateUser,doctorsController.list)
router.post('/doctors',authenticateUser,doctorsController.create)
router.get('/doctors/:id',authenticateUser,doctorsController.show)
router.put('/doctors/:id',authenticateUser,doctorsController.update)
router.delete('/doctors/:id',authenticateUser,doctorsController.destroy)

router.get('/patients',authenticateUser,patientsController.list)
router.post('/patients',authenticateUser,patientsController.create)
router.get('/patients/:id',authenticateUser,patientsController.show)
router.put('/patients/:id',authenticateUser,patientsController.update)
router.delete('/patients/:id',authenticateUser,patientsController.destory)


module.exports = router