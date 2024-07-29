import React from 'react';

function FullStatList(){
    const [stats,setStats]=React.useState([]);
    const [year,setYear]=React.useState("s2324");
    const [order,setOrder]=React.useState("player-name");
    React.useEffect(() =>{
        getStats(year,order);
    },[]);
    function handleChange(event){
        const {name,value} = event.target;
        setYear(value);
        getStats(value,order);
       // console.log(value);
    }
    async function getStats(value,order){
        try {
            const response = await fetch('https://bluemoonstats.onrender.com/detailedstats',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'   
                },
                body:JSON.stringify({
                    year:value,
                    order:order
                })
            });
            const data = await response.json();
            console.log(data);
            setStats(data);
        } catch (error) {
            console.error(error);
        }
        
    }
    // async function getStats(value,order){
    //     const response = await fetch('http://localhost:3000/detailedstats',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'   
    //         },
    //         body:JSON.stringify({
    //             year:value,
    //             order:order
    //         })
    //     });
    //     const data = await response.json();
    //     //console.log(data);
    //     setStats(data);
    // }
    
    function handleClick(event){
        const name = event.target.className;
        setOrder(name);
        getStats(year,name);
       console.log(name);
    }
    return(
        <div className="full-stat-list">
            <h1 className="playerstats-heading">Detailed Player Statistics</h1>
            
            <select name="year" onChange={handleChange} className="season-selector">
                <option value="s2324">23/24</option>
                <option value="s2425">24/25</option>
            </select>
            <table class="styled-table">
                <thead className="table-header">
                     <tr>
                          <th className="player-name" onClick={handleClick}>Player Name</th>
                          <th className="age-details" onClick={handleClick}>Age</th>
                          <th className="position newposition" onClick={handleClick}>Position</th>
                          <th className="matchesplayed" onClick={handleClick}>Matches Played</th>
                          <th className="goalss" onClick={handleClick}>Goals</th>
                          <th className="assists" onClick={handleClick}>Assists</th>
                          <th className="minutesplayed" onClick={handleClick}>Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                {stats.map((stat)=>{
                        return(
                            <tr>
                                <td>{stat.name}</td>
                                <td>{stat.age}</td>
                                <td>{stat.position}</td>
                                <td>{stat.matchesplayed}</td>
                                <td>{stat.goals}</td>
                                <td>{stat.assists}</td>
                                <td>{stat.minutesplayed}'</td>
                            </tr>
                        )
                    })}
                     
                 </tbody>
            </table>
        </div>
    )

}

export default FullStatList;