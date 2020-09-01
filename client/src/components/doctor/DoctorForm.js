import React from 'react'
import { Button, Form, FormGroup, Label, Input,Row,Col} from 'reactstrap'
import {connect} from 'react-redux'

class DoctorForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname :'',
            lastname:'',
            dob:'',
            gender:'',
            email:'',
            mobileno:'',
            qualification:'',
            specialization:'',
            clinicLocation:'',
            clinicTiming:'',
            image:null

        }
    }
    handleChange=(e) =>{
        if(e.target.type == "file"){
            this.setState({image:e.target.file[0]})
        }
        else{
            this.setState({
                [e.target.name] : e.target.value
            })
        }
        
    }

    handleSubmit= (e) =>{
        e.preventDefault()
        const formData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            gender: this.state.gender,
            email: this.state.email,
            mobileno: this.state.mobileno,
            qualification: this.state.qualification,
            specialization: this.state.specialization,
            clinicLocation: this.state.clinicLocation,
            clinicTiming: this.state.clinicTiming,
        }
        console.log(formData)
        this.props.doctor && (formData.id = this.props.doctor._id)
        this.props.handleEditSubmit(formData)
    } 

    handleRadioChange=(gender) => {
        this.setState({gender})
    }



    render(){
        return(
            <div>
                <Form onSubmit= {this.handleSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor='firstname'>FirstName</Label>
                                <Input 
                                type='text'
                                id='firstname' 
                                name='firstname'
                                value={this.state.firstname}  
                                onChange={this.handleChange} 
                                placeholder='enter first name'/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='lastname'>LastName</Label>
                                <Input 
                                type='text' 
                                id='lastname' 
                                name='lastname'
                                value={this.state.lastname} 
                                onChange={this.handleChange} 
                                placeholder='enter last name' />
                           </FormGroup>
                        </Col>
                    </Row>

                    <Col md={6} >
                    <FormGroup>
                        <Label htmlFor='dob' >DOB</Label>
                        <Input 
                        type='date' 
                        id='dob' 
                        name='dob'
                        value={this.state.dob} 
                        onChange={this.handleChange} 
                        placeholder='enter your date of birth' />
                    </FormGroup>
                    </Col>

                    <FormGroup>
                        <Label>Gender</Label>
                        <Row>
                            <Col md={3}>
                                <FormGroup check >
                                    <Label >
                                    <Input 
                                    type='radio' 
                                    id='male'
                                    name='gender' 
                                    checked={this.state.gender === 'male'} 
                                    onChange={()=>{
                                        this.handleRadioChange('male')
                                    }}/> Male
                                    </Label>
                               </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup check>
                                    <Label >
                                        <Input 
                                        type='radio' 
                                        id='female'
                                        name='gender' 
                                        checked={this.state.gender === 'female'} 
                                        onChange={()=>{
                                            this.handleRadioChange('female')
                                        }} /> Female
                                    </Label>
                               </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup check >
                                    <Label>
                                        <Input 
                                        type='radio'
                                        id='other' 
                                        name='gender' 
                                        checked={this.state.gender === 'other'} 
                                        onChange={()=>{
                                            this.handleRadioChange('other')
                                        }}/>Other
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                     </FormGroup>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input 
                        type='text' 
                        id='email' 
                        name='email' 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        placeholder='enter your email' />
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='mobileno'>MobileNo.</Label>
                        <Input 
                        type='text' 
                        id='mobileno' 
                        name='mobileno' 
                        value={this.state.mobileno} 
                        onChange={this.handleChange} 
                        placeholder='enter your mobile number' />
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='qualification'>Qualification</Label>
                        <Input 
                        type='text' 
                        id='qualification' 
                        name='qualification'
                        value={this.state.qualification} 
                        onChange={this.handleChange} 
                        placeholder='enter your qualification'/>
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='specialization' >Specialization</Label>
                        <Input typr='text' id='specialization' name='specialization' value={this.state.specialization} onChange={this.handleChange} placeholder='specialization' />
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='clinicLocation' >Clinic Location</Label>
                        <Input type='text' id='clinicLocation' name='clinicLocation' value={this.state.clinicLocation} onChange={this.handleChange} placeholder='enter location'/>
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='clinicTiming'>Clinic Timing</Label>
                        <Input type='time' id='clinicTiming' name='clinicTiming' value={this.state.clinicTiming} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>

                    <FormGroup>
                        <Label htmlFor='image'>Image</Label>
                        <Input type='file' name='image' id='image' onChange={this.handleChange} />

                    </FormGroup>
                    <Button className="register-btn btn-lg btn-block" type="submit">Submit</Button>
                </Form>   
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        doctor:state.doctor
    }
}

export default connect(mapStateToProps)(DoctorForm)