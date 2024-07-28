import React from 'react';
import {useNavigate} from 'react-router-dom';
import {redirect} from "react-router-dom";
import AdminContent from '../admin/AdminContent';
import { useAuthenticationContext } from '../context/AuthenticationContext';
function LoginPageContent(){    
  
    const [loginDetails,setLoginDetails]=React.useState();
    const { isAuthenticated,setIsAuthenticated } = useAuthenticationContext();
    const navigate = useNavigate();
    window.history.replaceState("AdminBMStats", "AdminBMStats", "/loginpage"); 
    
    async function login(){
        //  console.log('login function called');
       // console.log(loginDetails);
        const result = await fetch('https://bluemoonstats.onrender.com/login',{
            method:'POST',
            'credentials': 'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginDetails),
            
        })
        // const result = await fetch('http://localhost:3000/login',{
        //     method:'POST',
        //     'credentials': 'include',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(loginDetails),
            
        // })
        const data= await result.json();
       // setLoginStatus(result.ok);
        if(result.ok){
            localStorage.setItem('admin',JSON.stringify(data.message));
            setIsAuthenticated(true); 
            console.log(isAuthenticated);
        }
        console.log(result.ok);
    }

    function handleChange(event){
        console.log('handleChange called');
        const {name,value}=event.target;
        setLoginDetails((prevValue)=>{
            return{
               ...prevValue,
                [name]:value
            }
        });
    }
    async function handleForm(event){
        event.preventDefault();
        await login();    
        
    }   
    return (
        <div className="loginarea">
            <div className="leftside"><div></div><div className="lefttext">Welcome Back,</div><div></div></div>
            
            <div className="container">
                <h1 className="login-heading">ADMIN LOGIN</h1>
                <form onSubmit={handleForm} method="POST">
                    <div className="entryarea">
                        <input type="text" id="username" className="inputss" name="username" autoComplete='off' required onChange={handleChange} />
                        <div className="labelline">Enter your Name</div> 
                         
                    </div>
                    <div className="entryarea">
                        <input type="password" id="password" className="inputss" name="password" autoComplete='off' required onChange={handleChange}/>
                        <div className="labelline">Enter your Password</div> 
                         
                    </div>
                    <button type="submit" className="bton">LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPageContent;