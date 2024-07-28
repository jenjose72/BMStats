import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Stats from './stats/Detailedstat.jsx';
import Players from  './players/Players.jsx';
import Home from './homepage/Home.jsx'
import LoginPage from './loginpage/LoginPageMain.jsx'
import AddPlayer from './addplayer/AddPlayer.jsx'
import EditPlayer from './editplayer/EditPlayer.jsx'
import EditPlayerStats from './editplayerstats/EditPlayerMain.jsx'
import DeletePlayer from './deleteplayer/DeletePlayerMain.jsx'
import AdminPage from './admin/AdminMain.jsx';
import { useAuthenticationContext } from './context/AuthenticationContext.jsx';
function App() {
  const {isAuthenticated}= useAuthenticationContext();
  console.log(isAuthenticated);

  return (
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home />}></Route>
          <Route path="/home" element ={<Home />}></Route>
          <Route path="/stats" element ={<Stats />}></Route>
          <Route path="/players" element ={<Players />}></Route>
          <Route path="/admin" element ={isAuthenticated==false?<LoginPage/>:<AdminPage />}></Route>
          <Route path="/loginpage" element ={isAuthenticated==false?<LoginPage />:<AdminPage />}></Route>
          <Route path="/addplayer" element ={isAuthenticated==false?<LoginPage />:<AddPlayer />}></Route>
          <Route path="/editplayer" element ={isAuthenticated==false?<LoginPage />:<EditPlayer />}></Route>
          <Route path="/editplayerstats" element ={isAuthenticated==false?<LoginPage />:<EditPlayerStats />}></Route>
          <Route path="/deleteplayer" element ={isAuthenticated==false?<LoginPage />:<DeletePlayer />}></Route>
          <Route path="/admin" element ={<AdminPage />}></Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
