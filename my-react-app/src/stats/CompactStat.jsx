import React from "react";
import TopStatSheet from './TopGoalScorer.jsx'
import Footer from '../common/Footer.jsx'
import TopAssists from './TopAssists.jsx'
import TopGA from './TopGA.jsx'
import MostMinutes from './MostMinutes.jsx'
function CompactStat(){
    return (
        <div className="statTable">
    <TopStatSheet />
      <TopAssists />
      <TopGA />
      <MostMinutes />
        </div>
    );
}

export default CompactStat;