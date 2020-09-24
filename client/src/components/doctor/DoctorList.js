import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startRemoveDoctor } from '../../actions/doctorAction'
import swal from 'sweetalert'

import { Container, Table, Button } from 'react-bootsrap'

function DoctorList(props){

    const handleRemove = (id) =>{
        swal({
            title:'Are you sure ?',
            icone: 'warning',
            buttons: true,
            dangerMode: true
        })
        .then((willDelete)=>{
            if(willDelete){
                swal('successfully Deleted',{
                    icone: 'success'
                });
                props.dispatch(startRemoveDoctor(id))
            }
        })
    }

    return(
        <div className='fluid-container' style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#add8e6,#808080,#90EE90)"}}>
            <Container>
                <h1 className='pt-5 pb-2'> Doctor - {props.doctor.length}</h1>
                <Table  striped bordered hover>
                    <thead className='thead-dark'>
                        <tr>
                            <td>Id</td>
                            <td>DoctorName</td>
                            <td>DOB</td>
                            <td>Gender</td>
                            <td> Email</td>
                            <td>Mobileno</td>
                            <td>Qualification</td>
                            <td> Specialization</td>
                            <th>Show</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.doctor.map((ele,i)=>{
                                return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{ele.firstname} + {ele.lastname}</td>
                                    <td>{ ele.dob }</td>
                                    <td> {ele.gender} </td>
                                    <td> {ele.email} </td>
                                    <td> {ele.mobileno} </td>
                                    <td> {ele.qualification} </td>
                                    <td> {ele.specialization} </td>
                                    <td><Link to={`/doctors/${ele._id}`}><Button className='btn btn-info'>show</Button></Link></td>
                                    <td><Link to={`/doctors/editDoctor/${ele._id}`}><Button className='btn btn-warning'>update</Button></Link></td>
                                    <td><Button onClick={ () => handleRemove(ele._id)} className='btn btn-danger'>remove</Button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Link to="/doctors/add">Add Doctors</Link>
            </Container>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        party: state.party
    }
}

export default connect(mapStateToProps)(DoctorList)
