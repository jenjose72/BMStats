import {useState,createContext,useContext} from 'react';

export const AuthenticationContext = createContext();

export const useAuthenticationContext = ()=>{
    return useContext(AuthenticationContext);
}

export const AuthenticationProvider = ({children})=>{
    const [isAuthenticated,setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("admin"))||false);
    
    return (
        <AuthenticationContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
  