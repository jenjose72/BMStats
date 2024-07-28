import React from "react";
import '../../css/index.css';
function Header(){
    const[sidebar,setSidebar]=React.useState("sidebarhidden");
    function showSidebar(){
        console.log("Entered ")
        setSidebar("sidebar")
        console.log(sidebar);
    }
    function closeSidebar(){
        setSidebar("sidebarhidden")
    }
    return(
        <div className="header nav">
            <ul className={sidebar=="sidebarhidden"?"sidebarhidden":"sidebar"}>
                <li onClick={closeSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="20px" fill="#1C2C5B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/stats">Stats</a></li>
                <li><a href="/players">Players</a></li>
            </ul>
            <ul className="mainnavbar">
                <li ><a href="/admin" className="naming">BlueMoonStats</a></li>
                <li className="hideOnMobile"><a href="/">Home</a></li>
                <li className="hideOnMobile"><a href="/stats">Stats</a></li>
                <li className="hideOnMobile"><a href="/players">Players</a></li>
                <li onClick={showSidebar} className="hideonpc"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C2C5B"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </div>
    )
}

export default Header;