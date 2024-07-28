import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import LoginPageContent from './LoginPageContent.jsx';
import { BrowserRouter } from "react-router-dom"

function LoginPageMain(){
    return (
        <React.StrictMode>
        <Header/>
        <LoginPageContent/>
        <Footer/>
    </React.StrictMode>
    )
}

export default LoginPageMain;