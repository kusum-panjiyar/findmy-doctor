import React from 'react'
import { connect } from 'react-redux'
import DoctorForm from './DoctorForm'

import {startEditDoctor} from '../../actions/doctorAction'
import {findDoctor} from '../../selectors/doctorSelector'

function EditDoctor(props){
    const handleEditSubmit = (doctor) => {
        const redirect = () => {
            return props.history.push('/doctors')
        }
        props.dispatch(startEditDoctor(doctor,redirect))
    }

    return (
        <div>
            {props.doctor && (
                <div>
                    {props.doctor.name && 
                    <DoctorForm doctor= {props.doctor} handleEditSubmit={handleEditSubmit} />
                    } 
                </div>
            )}
        </div>
    )
}

const mapStateToprops = (state,props) => {
    const id = props.match.params.id
    return {
        candidate: findDoctor(state.doctor,id)
    }
}

export default connect(mapStateToprops)(EditDoctor)