import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import doctorReducer from '../reducers/doctorReducer'
import patientReducer from '../reducers/patientReducer'
import appointmentReducer from '../reducers/appointmentReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        doctor:doctorReducer,
        patient:patientReducer,
        appointment:appointmentReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore