import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/HeaderAdmin.jsx';
import Footer from '../common/Footer.jsx';
import DeletePlayer from './DeletePlayer.jsx';

function DeletePlayerMain(){
    return(
        <React.StrictMode>
        <Header/>
        <DeletePlayer />
        <Footer/>
    </React.StrictMode>
    )
}

export default DeletePlayerMain;