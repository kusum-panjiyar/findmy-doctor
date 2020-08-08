import React from 'react'
import { Button, Form, FormGroup, Label, Input,Row,Col} from 'reactstrap'

class PatientForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname : "",
            lastname: "",
            dob: "",
            gender: "",
            email: "",
            mobileno: "",
            bloodGroup: "",
            patientWeight: ""

        }
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
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
            bloodGroup: this.state.bloodGroup,
            patientWeight: this.state.patientWeight
        }
        console.log(formData)
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
                                <Input type='text' id='firstname' name='firstname' value={this.state.firstname} onChange={this.handleChange} placeholder='enter first name'/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='lastname'>LastName</Label>
                                <Input type='text' id='lastname' name='lastname' value={this.state.lastname} onChange={this.handleChange} placeholder='enter last name' />
                           </FormGroup>
                        </Col>
                    </Row>

                    <Col md={6} >
                    <FormGroup>
                        <Label htmlFor='dob' >DOB</Label>
                        <Input type='date' id='dob' name='dob' value={this.state.dob} onChange={this.handleChange} placeholder='enter your date of birth' />
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
                        <Label htmlFor='bloodGroup'>Blood Group</Label>
                        <Input type='text' id='bloodGroup' name='bloodGroup' value={this.state.bloodGroup} onChange={this.handleChange} placeholder='enter your blood Group'/>
                    </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor='patientWeight' >Patient Weight</Label>
                        <Input typr='text' id='patientWeight' name='patientWeight' value={this.state.patientWeight} onChange={this.handleChange} placeholder='enter your weight' />
                    </FormGroup>
                    </Col>

                    <FormGroup>
                        <Label htmlFor='uploadPhoto'>Upload Photo</Label>
                        <Input type='file' name='uploadPhoto' id='uploadphoto' />

                    </FormGroup>
                    <Button>Submit</Button>
                </Form>   
            </div>
        )
    }
}

export default PatientForm