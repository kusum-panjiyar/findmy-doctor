import axios from 'axios'

export const AddDoctors =(doctor)=>{
    return {type: 'ADD_DOCTORS',payload:doctor}
}

export const startAddDoctors =(formData,redirect)=>{
    return(dispatch)=> {
        axios.post('/doctors',formData,{
            headers: {
                'x-auth':localStorage.getItem('authTocken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('successfully added')
                const doctor = response.data
                redirect()
                dispatch(AddDoctors(doctor))
            }
        })
    }
}

export const setDoctors = (doctor) => {
    return { type: 'SET_DOCTORS',payload: doctor}
}

export const startSetDoctors = () => {
    return (dispatch) => {
        axios.get('/doctors',{headers:{
            'x-auth': localStorage.getItem('authToken')
        }})
        .then((response)=>{
            const doctor = response.data
            dispatch(setDoctors(doctor))
        })
    }
}

export const removeDoctor = (doctor) => {
    return { type: 'REMOVE_DOCTOR',payload: doctor}
}

export const startRemoveDoctor = (id) => {
    return (dispatch) => {
        axios.delete(`/doctors/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const doctor = response.data
            dispatch(removeDoctor(doctor))
        })
    }
}

export const editDoctor = (doctor) => {
    return { type: 'EDIT_DOCTOR',payload: doctor}
}

export const startEditDoctor = (doctor,redirect) => {
    return (dispatch) => {
        axios.put(`/doctors/${doctor.id}`,doctor,{
            headers: {'x-auth': localStorage.getItem('authToken')}
        })
        .then((response)=> {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('update sucessfully')
                const doctor = response.data
                dispatch(editDoctor(doctor))
                redirect()
            }
        })

    }
}