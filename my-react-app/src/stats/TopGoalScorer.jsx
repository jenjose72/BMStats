import React from 'react';

function TopStatSheet(){
    
    React.useEffect(()=>{
        getGoals();
},[]);
const [players,setPlayers]=React.useState([{name:"Please wait 50 seconds",goals:null},
    {name:"Please wait 50 seconds",goals:null},
    {name:"Please wait 50 seconds",goals:null},
    {name:"Please wait 50 seconds",goals:null},
    {name:"Please wait 50 seconds",goals:null}]
);
async function getGoals(){
    try {
        const result =await fetch("https://bluemoonstats.onrender.com/Stats");
        //const result =await fetch("http://localhost:3000/Stats");
        const jsonData=await result.json()
        //console.log(jsonData);
        setPlayers(jsonData);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getGoals");
    }
}
    console.log(players);
   console.log(players[0].name);
    console.log(players[0].goals);
    return(
        <div className="flex-container">
            <p className="Heading">Top Goal Scorers</p>
            <ul className="listT">
                {
                    players.map((player)=>(
                        <li className="individualcard">
                            <span className="name">{player.name}</span>
                            <span className="goals">{player.goals }</span>
                        </li>
                    ))
                }
                
            </ul>
            <a href="/stats" className="viewlist">View Full List &#8594;</a>
        </div>
    )
}

export default TopStatSheet;