import React from 'react';

function Tableplayers(props){
    return(
        <div class="table-row">		
				<div class="table-data">{props.name}</div>
				<div class="table-data">{props.age}</div>
				<div class="table-data">{props.position}</div>
        <div class="table-data">{props.jerseynumber}</div>
		</div>
    );
}

export default Tableplayers;