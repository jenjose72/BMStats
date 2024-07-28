import React from 'react';

function TopAssists(){
    
    React.useEffect(()=>{
        getAssists();
},[]);
const [players,setPlayers]=React.useState([{name:"Please wait 50 seconds",assists:null},
    {name:"Please wait 50 seconds",assists:null},
    {name:"Please wait 50 seconds",assists:null},
    {name:"Please wait 50 seconds",assists:null},
    {name:"Please wait 50 seconds",assists:null}]
);
async function getAssists(){
    try {
        const result =await fetch("https://bluemoonstats.onrender.com/getAssists");
        const jsonData=await result.json()
        //console.log(jsonData);
        setPlayers(jsonData);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getAssists");
    }
}
    //console.log(players);
    return(
        <div className="flex-container">
            <p className="Heading">Top Assisters</p>
            <ul className="listT">
                {
                    players.map((player)=>(
                        <li className="individualcard">
                            <span className="name">{player.name}</span>
                            <span className="goals">{player.assists }</span>
                        </li>
                    ))
                }
            </ul>
            <a href="/stats" className="viewlist">View Full List &#8594;</a>
        </div>
    )
}

export default TopAssists;