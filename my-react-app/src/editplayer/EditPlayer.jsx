import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/HeaderAdmin.jsx';
import Footer from '../common/Footer.jsx';
import EditPlayerForm from './EditPlayerForm.jsx';

function EditPlayer(){
    return(
        <React.StrictMode>
        <Header />
        <EditPlayerForm />
        <Footer />
        
    </React.StrictMode>
    )
}

export default EditPlayer;