import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {CardDeck,Card} from 'react-bootstrap'
import moment from 'moment'
import image from './image.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'


function Home(props){
    return(
        <div className="" >
            {/* <h2>Welcome to our WEBSITE</h2>
            <img src={image} alt="doctor" fluid="true" style={{height:"100%", width:'100%'}} /> */}
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <div className='d-block justify-content-center' >
                            <img
                            src={img2}
                            alt="First slide"
                            width='70%'
                            heigth='300'
                            />
                        </div> 
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block justify-content-center">
                            <img
                            src={img6}
                            alt="Third slide"
                            width='100%'
                            height='650'
                            />
                        </div>
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-block justify-content-center'>
                            <img
                            src={img7}
                            alt="Third slide"
                            width='100%'
                            height='650'
                            />
                        </div>
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='card'>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={img1} width='50px' height='160px'/>
                        <Card.Body>
                            <Card.Title style={{fontFamily:'arial'}}><b>General Physician</b></Card.Title>
                            <Card.Text>
                            General Physicians are highly trained specialists who provide a range of non-surgical health care to adult patients. They care for difficult, serious or unusual medical problems and continue to see the patient until these problems have resolved or stabilised.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated  {moment().startOf('day').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} width='50' height='160' />
                        <Card.Body>
                            <Card.Title><b>Gynaecology</b></Card.Title>
                            <Card.Text>
                            Gynaecology or gynecology (see spelling differences) is the medical practice dealing with the health of the female reproductive system (vagina, uterus, and ovaries). Outside medicine, the term means "the science of women".
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('day').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img4} width='50' height='160'/>
                        <Card.Body>
                            <Card.Title><b>Dermatology</b></Card.Title>
                            <Card.Text>
                            Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist doctor who manages diseases related to skin, hair and nails and some cosmetic problems.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('day').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}} >
                
                <div className='copyright'>
                    <h5 className="text-center pt-3">© All rights reserved.</h5>
                </div>

            </div>
        </div>
    )
}
export default Home