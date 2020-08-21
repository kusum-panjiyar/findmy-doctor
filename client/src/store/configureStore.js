import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import userReducer from '../reducers/userReducer'
import doctorReducer from '../reducers/doctorReducer'
import patientReducer from '../reducers/patientReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        doctor:doctorReducer,
        patient:patientReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore