import React from 'react';
import Tableheader from './Tableheader.jsx';
import Tableplayers from './Tableplayers.jsx';

function playerList(){
	React.useEffect(()=>{
		getPlayerList();
	},[]);
	const [players, setPlayers]=React.useState([{name:'loading',age:0,position:'loading',jerseynumber:0}])
	async function getPlayerList(){
		try {
			const result = await fetch('http://localhost:3000/getplayerlist');
			const jsonData = await result.json();
			setPlayers(jsonData);
		} catch (error) {
			console.error(error);
		}
	}
    return(
        <div className="playerList">
            <div class="container">
	<div class="table">
		<Tableheader/>
		<div class="table-content">	
			{players.map((player)=>(<Tableplayers name={player.name} age={player.age} position={player.position} jerseynumber={player.jerseynumber}/>))
			}	
		</div>	
	</div>
</div>
        </div>
    )
}


export default playerList;