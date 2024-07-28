import React from 'react';
function AddPlayerForm(){

    const [playerdetails,setPlayerDetails]=React.useState({playername:'',age:null,jerseynumber:null,position:''})   
       
    function handleChange(event){
        const {name,value}=event.target;
        setPlayerDetails((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    async function handleSubmit(event){
        event.preventDefault();
        console.log(playerdetails);
        let body='';
        const response = await fetch('https://bluemoonstats.onrender.com/editplayerroute',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(playerdetails)
        })
        
        console.log(body);
    }
    
    return(
            <form className="form" onSubmit={handleSubmit}>
            <p className="heading">Edit Player Info</p>
            <div className="Input">
                <div className="input-data">
                    <input type="text"  
                name ="playername" class="input" 
                onChange={handleChange} autoComplete='off' required></input>
                <label>Enter Player Name</label><br></br>
                </div>
                <div className="input-data">
                    <input type="number" 
                name ="age" class="input"
                onChange={handleChange} autoComplete='off'required></input><br></br>
                <label>Enter Player Age</label>
                </div>
                <div className="input-data">
                    <input type="number"  
                name ="jerseynumber" class="input"
                onChange={handleChange} autoComplete='off' required></input>
                <label>Enter Player Jersey Number</label>
                <br></br>
                </div>
                
                
                <select name="position" id="position-dropdown" className="input-selector" onChange={handleChange}>
                    <option value="null" className="defaults">Choose Position</option>
                    <option value="GK"className="position" >GK</option>
                    <option value="Defender" className="position">Defender</option>
                    <option value="Midfielder"className="position">Midfielder</option>
                    <option value="Forward"className="position">Attacker</option>
                </select><br></br>
                <select name="year" onChange={handleChange} className="input-selector">
                <option value="s2324">23/24</option>
                <option value="s2425">24/25</option>
            </select><br></br>
                <button name="submit" className="btun" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AddPlayerForm;