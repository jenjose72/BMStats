import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/HeaderAdmin.jsx';
import Footer from '../common/Footer.jsx';
import EditPlayerStats from './EditPlayerStats.jsx';

function EditPlayerMain(){
    return (
        <React.StrictMode>
        <Header/>
        <EditPlayerStats/>
        <Footer/>
    </React.StrictMode>
    )
}

export default EditPlayerMain;
