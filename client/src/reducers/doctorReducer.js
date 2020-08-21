const doctorInitialState = []
const doctorReducer =(state=doctorInitialState,action)=>{
    switch(action.type){
        case'SET_DOCTORS':{
            return [...state,action.payload]
        }
        case 'ADD_DOCTORS': {
            return [...state,action.payload]
        }
        case 'EDIT_DOCTOR':{
            return state.map(doctor => {
                if(doctor._id === action.payload._id){
                    return Object.assign({},doctor,action.payload)
                }
                else{
                    return Object.assign({},doctor)
                }
            })
        }
        case 'REMOVE_DOCTOR': {
            return state.filter(doctor => {
                return doctor._id !== action.payload._id
            })
        }
        default: {
            return [...state]
        }
    }
}

export default doctorReducer