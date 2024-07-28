import React from 'react';

function TopGA(){
    
    React.useEffect(()=>{
        getGA();
},[]);
const [players,setPlayers]=React.useState([{name:"Please wait 50 seconds",ga:null},
    {name:"Please wait 50 seconds",ga:null},
    {name:"Please wait 50 seconds",ga:null},
    {name:"Please wait 50 seconds",ga:null},
    {name:"Please wait 50 seconds",ga:null}]
);
async function getGA(){
    try {
        const result =await fetch("/getga");
        const jsonData=await result.json()
        //console.log(jsonData);
        setPlayers(jsonData);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getGA");
    }
}
   // console.log(players);
    return(
        <div className="flex-container">
            <p className="Heading">Most G/A</p>
            <ul className="listT">
                {
                    players.map((player)=>(<li className="individualcard">
                        <span className="name">{player.name}</span>
                        <span className="goals">{player.ga }</span>
                    </li>))
                }
            </ul>
            <a href="/stats" className="viewlist">View Full List &#8594;</a>
        </div>
    )
}

export default TopGA;