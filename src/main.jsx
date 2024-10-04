import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import api from './api'
import {ApiContext} from "./context/ApiContext.js";


createRoot(document.getElementById('root')).render(
    <ApiContext.Provider value={api}>
        <App />
    </ApiContext.Provider>

)
