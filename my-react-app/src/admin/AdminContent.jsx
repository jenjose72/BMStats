import React from 'react';
function AdminContent(){
    window.history.replaceState("AdminBMStats", "AdminBMStats", "/admin"); 
   
    return(<div className="contents"><div className="admincontent"> 
            <h1 className="heading-admin">Admin Page</h1>
            <a href="/addplayer" className='a'><div className ="card-admin addplayer">
                <p>Add Player</p>         
            </div></a>
            
            <a href="/editplayer" className='a'><div className ="card-admin editplayer">
                <p>Edit Player Info</p>
                
            </div></a>
            
            <a href="/editplayerstats" className='a'><div className ="card-admin editplayerstats">
                <p>
                    Edit Player Stats
                </p>
                
            </div></a>
            
            <a href="/deleteplayer" className='a'> <div className ="card-admin deleteplayer">
                <p>Delete Player</p>
                
            </div></a> </div>
    
        </div>
         
    );
}

export default AdminContent;