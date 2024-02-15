import { React } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter}from "react-router-dom"
import { App } from './LogApp'
import "./Login/Login.module.scss"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

)
