import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/HeaderAdmin.jsx';
import Footer from '../common/Footer.jsx';  
    
import AddPlayerForm from './AddPlayerForm.jsx';

function AddPlayer(){
    return(
        <React.StrictMode>
            <Header />
                <AddPlayerForm />
            <Footer />        
        </React.StrictMode>
    )
}

export default AddPlayer;
