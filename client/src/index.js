import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App'
import { Provider } from 'react-redux'  
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import { startGetUser} from './actions/userAction'
import { startSetDoctors } from './actions/doctorAction'

const store = configureStore()

console.log(store.getState())

store.subscribe(()=> {
    console.log(store.getState())
})

//handle page reload
 if(localStorage.getItem('authToken')) {
     store.dispatch(startGetUser())
     store.dispatch(startSetDoctors())
 }

const jsx = ( 
    <Provider store={store}> 
        <App />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root')) 