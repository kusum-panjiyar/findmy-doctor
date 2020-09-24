import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {findDoctor} from '../../selectors/doctorSelector'
import {Container} from 'react-bootstrap'

function DoctorShow(props){
    return(
        <Container>
            <h1 className='mt-5'>Doctor Show</h1>
            <h2 className='mt-5'><b>Doctor Name:-</b>{props.doctor.name} </h2>
            <Link to='/doctors'>back</Link>
        </Container>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        doctor:findDoctor(state.doctor,id)
    }
}
export default connect(mapStateToProps)(DoctorShow)