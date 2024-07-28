import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import HomePage from './HomePage.jsx';
import CompactStat from '../stats/CompactStat.jsx';
function Home(){
    return (
        <React.StrictMode>
        <Header/>
        <HomePage/>
        <Footer/>
    </React.StrictMode>
    )
}

export default Home;