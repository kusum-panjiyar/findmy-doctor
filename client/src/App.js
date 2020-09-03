import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { connect } from 'react-redux'
//import "./App.css"

import Home from './components/static/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import {startUserLogout} from './actions/userAction'

import DoctorForm from './components/doctor/DoctorForm'
import AddDoctor  from './components/doctor/AddDoctor'
import EditDoctor from './components/doctor/EditDoctor'

import PatientForm from './components/patient/patientForm'
import Appointment from './components/bookAppointment/Appointment'

import {Navbar , Nav } from 'react-bootstrap'
 

function App(props) {
    const handleLogout = () => {
        props.dispatch(startUserLogout())
    }

    return(
        <BrowserRouter>
            <div>
                
                {
                    Object.keys(props.user).length !== 0 ? (
                        <div> 
                            <Navbar bg='dark' varient="dark">
                                <Navbar.Brand href={"/"} style={{color:'white'}}>Findmy Doctor</Navbar.Brand>
                                <Nav className="ma-auto">
                                    <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                    <Nav.Link href={"/patients"} style={{color:'white'}}>Patient</Nav.Link>
                                    <Nav.Link href={"/doctors"} style={{color:'white'}}>Doctor</Nav.Link>
                                    <Nav.Link href={"/appointment"} style={{color:'white'}}>Book Appointment</Nav.Link>
                                    <Nav.Link to="#" onClick={handleLogout} style={{color:'white'}}>Logout</Nav.Link>
                                </Nav>
                            </Navbar>
                        </div>

                    ) : (
                        <div>
                        <Navbar bg="dark" variant="dark" >
                             <Navbar.Brand href={"/"} style={{color:'white'}}>Findmy Doctor</Navbar.Brand>
                             <Nav className="ml-auto">
                                 <Nav.Link href={"/"} style={{color:'white'}}>Home</Nav.Link>
                                 <Nav.Link href={"/users/register"} style={{color:'white'}}>Register</Nav.Link>
                                 <Nav.Link href={"/users/login"} style={{color:'white'}}>Login</Nav.Link>
                             </Nav>
                         </Navbar>
                        </div>
                    )
                     
                }

                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />

                    <Route path="/doctors" component={DoctorForm} />
                    <Route path="/doctors" component={AddDoctor} />
                    <Route path="/doctors" component={EditDoctor} />

                    <Route path='/patients' component={PatientForm} />

                    <Route path="/appointment" component={Appointment} />
                </Switch>
            </div>
        </BrowserRouter>
         
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps)(App)