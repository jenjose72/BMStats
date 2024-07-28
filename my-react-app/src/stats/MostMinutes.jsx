import React from 'react';

function MostMinutes(){
    
    React.useEffect(()=>{
        getMinutes();
},[]);
const [players,setPlayers]=React.useState([
    {name:"Please wait 50 seconds",minutesplayed:null},
    {name:"Please wait 50 seconds",minutesplayed:null},
    {name:"Please wait 50 seconds",minutesplayed:null},
    {name:"Please wait 50 seconds",minutesplayed:null},
    {name:"Please wait 50 seconds",minutesplayed:null}]
);
async function getMinutes(){
    try {
        const result =await fetch("https://bluemoonstats.onrender.com/getmp");
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
            <p className="Heading">Most Minutes Played</p>
            <ul className="listT">
                {
                    players.map((player)=>(
                        <li className="individualcard">
                            <span className="name">{player.name}</span>
                            <span className="goals">{player.minutesplayed }'</span>
                        </li>
                    ))
                }
            </ul>
            <a href="/stats" className="viewlist">View Full List &#8594;</a>
        </div>
    )
}

export default MostMinutes;