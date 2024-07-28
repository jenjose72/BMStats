import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import PlayerTable from './PlayerTable.jsx';

function Players(){
    return (
        <React.StrictMode>
        <Header />
        <PlayerTable/>
        <Footer />        
    </React.StrictMode>
    )
}

export default Players;