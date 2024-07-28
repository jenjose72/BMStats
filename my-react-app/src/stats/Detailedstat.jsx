import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css'
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import FullStatList from './FullStatList.jsx';

  function Detailedstat(){
    return (
        <React.StrictMode>
        <Header />
        <FullStatList />
        <Footer />
        </React.StrictMode>
    )
  }

  export default Detailedstat;

// import React from 'react';