import React from "react";
import '../../css/adminheader.css';
import { useAuthenticationContext } from "../context/AuthenticationContext";
function Header(){
    const {setIsAuthenticated} = useAuthenticationContext(); 
    async function handleDelete(){
    try {
        const result = await fetch('https://bluemoonstats.onrender.com/logout',{
            method: 'GET',
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // const result = await fetch('http://localhost:3000/logout',{
        //     method: 'GET',
        //     'credentials': 'include',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        const jsonData = await result.json();
        console.log(jsonData);
        if(jsonData.error)
            throw new Error(jsonData.error);
        localStorage.removeItem("admin");
        setIsAuthenticated(false);
        location.reload(true);
    } catch (error) {
        console.error(error);
    }
     
    
    }
    return(
        <div className="header">
    
            <a href="/admin" className="logo">BlueMoonStats</a>
            <div className="header-right">
                <button onClick={handleDelete} className="logout">Log out</button>
            </div>
        </div>
    )
}

export default Header;