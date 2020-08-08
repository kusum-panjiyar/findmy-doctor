import React from 'react'
import image from './image.jpg'

function Home(props){
    return(
        <div className="" >
            {/* <h2>Welcome to our WEBSITE</h2> */}
            <img src={image} alt="doctor" fluid="true" style={{height:"100%", width:'100%'}} />
        </div>
    )
}
export default Home