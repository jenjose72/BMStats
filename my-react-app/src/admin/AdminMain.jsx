import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/HeaderAdmin.jsx';
import Footer from '../common/Footer.jsx';
import AdminContent from './AdminContent.jsx';

function AdminMain(){
    return(
        <React.StrictMode>
        <Header/>
        <AdminContent />
        <Footer/>
    </React.StrictMode>
    )
}

export default AdminMain;