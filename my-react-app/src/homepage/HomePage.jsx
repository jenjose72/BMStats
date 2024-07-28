import React from 'react';
import Carousel from './Carousel.jsx';
import CompactStat from '../stats/CompactStat.jsx';
function HomePage(){
    return(
        <div className="content">
           <Carousel />
           <CompactStat />
        </div>
    );
}

export default HomePage;