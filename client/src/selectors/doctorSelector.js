export const findDoctor = (doctor,id)=> {
    return doctor.find(doctor=>doctor._id === id)
}