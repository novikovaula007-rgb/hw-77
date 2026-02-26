import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import App from './App.tsx'
import {CssBaseline} from "@mui/material";
import {ToastContainer} from "react-toastify";
import { Provider } from 'react-redux';
import {store} from "../app/store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <App/>
            <ToastContainer/>
        </Provider>
    </StrictMode>,
)
