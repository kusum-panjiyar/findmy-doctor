import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'
import {Alert} from 'react-bootstrap'
import Calendar from 'react-calendar'
import {startAppointment} from '../../actions/appointmentAction'

class Appointment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            name:'',
            email: '',
            contact: '',
            specialist: '',
            description: '',
            slot:'',
            status:'pending'
        }
    } 

    onChange = (date) => {
        this.setState({date})
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            date:moment(this.state.date).format('YYYY_MM_DD'),
            name:this.state.name,
            email:this.state.email,
            contact:this.state.contact,
            specialist:this.state.specialist,
            description:this.state.description,
            slot:this.state.slot,
            status:this.state.status

        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startAppointment(formdata,redirect))

        this.setState({
            date: new Date(),
            name:'',
            email:'',
            contact:'',
            specialist:'',
            description:'',
            slot:''
        })
    }
 
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h2 className='p-3 mb-1 bg-info text-white'>select Date To Book Appointment</h2>
                        <Calendar onChange={this.onChange} value={this.state.date} />
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            <form onSubmit={this.handleSubmit} >
                                <h3 className='p-3 mb-2 bg-warning text-dark'>Book Your Appointment</h3>
                                <div className='container form-group'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} placeholder='enter your name' />
                                </div>
                                
                                <div className='container form-group'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='text' name='email' id='email' value={this.state.email} onChange={this.handleChange} placeholder='enter your email' />
                                </div>

                                <div className='container form-group'>
                                    <label htmlFor='contact'>Contact</label>
                                    <input type='text' name='contact' id='contact' value={this.state.contact} onChange={this.handleChange} placeholder='enter your contact number' />
                                </div>

                                <div className="container form-group">
                                    <label htmlFor='specialist'>Specialist</label>
                                    <select value={this.state.specialist} name ='specialist' onChange={this.handleChange}>
                                        <option value="">---select---</option>
                                        <option value="General Physician">General Physician</option>
                                        <option value='Gynaecology'>Gynaecology</option>
                                        <option value='Dermatology'>Dermatology</option>
                                    </select>
                                </div>

                                <div className='container form-group'>
                                    <label htmlFor='description'>Description</label>
                                    <input type='text' name='description' id='description' value={this.state.description} onChange={this.handleChange} />
                                </div>

                                <div className='container form-group'>
                                    <label htmlFor='slot'>Slot</label>
                                    <select value={this.state.slot} name='slot' onChange={this.handleChange} >
                                        <option value="">---select---</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Afternoon">Afternoon</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                                <input type='submit' value='submit' className='btn btn-danger' />
                            </form>
                        </div>
                    </div>
                </div>
                <Alert variant="info">
                <Alert.Heading>Hey, you will be notified. Once booking is confirmed!</Alert.Heading>
                </Alert>
            </div>
        )
    }
}

export default connect()(Appointment)