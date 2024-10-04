import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './assets/css/index.css'

import api from './api'
import {ApiContext} from "./context/ApiContext.js";

import {Provider} from "react-redux";
import store from './store';


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ApiContext.Provider value={api}>
            <App />
        </ApiContext.Provider>
    </Provider>


)
