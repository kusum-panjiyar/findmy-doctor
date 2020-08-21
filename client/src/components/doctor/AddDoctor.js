import React from 'react'
import {connect} from 'react-redux'
import DoctorForm from './DoctorForm'
import { startAddDoctors } from '../../actions/doctorAction' 

function AddDoctor(props){
    const handleEditSubmit = (doctor) => {
        const redirect = () => props.history.push('/doctors')
        props.dispatch(startAddDoctors(doctor,redirect))
    }

    return (
        <div>
            <DoctorForm handleEditSubmit= {handleEditSubmit} />
        </div>
    )
}

export default connect()(AddDoctor)