import React from 'react';

function PlayerTable(){
    const[players,setPlayers]=React.useState([]);
    const [year,setYear]=React.useState("s2324");
    React.useEffect(()=>{
        getPlayerList(year);
    },[]);

    function handleChange(event){
        const {name,value} = event.target;
        setYear(value);
        getPlayerList(value);    
    }
    async function getPlayerList(value){
        try {
            const result = await fetch('https://bluemoonstats.onrender.com/getplayerlist',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({year:value})
            });
            const jsonData = await result.json();
            setPlayers(jsonData);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="full-stat-list">
        <h1 className="playerlist-heading">Complete Player List </h1>
        <select name="year" onChange={handleChange} className="year-selector">
                <option value="s2324">23/24</option>
                <option value="s2425">24/25</option>
            </select>
        <table className="styled-table">
            <thead>
                 <tr>
                      <th className="player-name">Player Name</th>
                      <th className="age">Age</th>
                      <th className="position">Position</th>
                      <th className="jerseynumber">Jersey Number</th>
                      
                </tr>
            </thead>
            <tbody>
                    {
                        players.map((player)=>(
                            <tr>
                                <td className="player-name">{player.name}</td>
                                <td className="age">{player.age}</td>
                                <td className="position">{player.position}</td>
                                <td className="jerseynumber">{player.jerseynumber}</td>
                            </tr>
                        ))
                    }
                    
             </tbody>
        </table>
    </div>
    );
}

export default PlayerTable;