import React from 'react';
import toast from 'react-hot-toast';

function AddPlayerForm(){
    const [success,setSuccess]=React.useState();
    const [playerdetails,setPlayerDetails]=React.useState([])
  
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
       setSuccess(false)
        let body='';
        const response = await fetch('https://bluemoonstats.onrender.com/addplayer',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(playerdetails)
        }
    )
       setSuccess(response.ok);
       if(success){
        toast.success('Player Added Successfully');
       }
       console.log(success);
       count=count+1;
       console.log(count);
    }
    
    return(
            <form className="form" onSubmit={handleSubmit}>
            <p className="heading">Add New Player</p>
            <div className="Input ">
                <div className="input-data">
                    <input type="text"  
                name ="playername" class="input" 
                onChange={handleChange} autoComplete='off' required></input>
                <label>Enter Player Name</label>
                <br></br>
                </div>
                <div className="input-data">
                    <input type="number"  
                name ="age" class="input"
                onChange={handleChange} autoComplete='off' required></input>
                <label>Enter Age </label><br></br>
                </div>
                <div className="input-data">
                    <input type="number" 
                name ="jerseynumber" class="input"
                onChange={handleChange} autoComplete='off'required></input>
                <label>Enter Jersey Number</label><br></br>
                </div>
                
                <select name="position" id="position-dropdown" class="input" onChange={handleChange}>
                    <option value="null" className="defaults">Choose Position</option>
                    <option value="GK"className="position" >GK</option>
                    <option value="Defender" className="position">Defender</option>
                    <option value="Midfielder"className="position">Midfielder</option>
                    <option value="Forward"className="position">Attacker</option>
                </select><br></br>
                <select aria-label ="year" name="year" id="options" onChange={handleChange}>
                    <option value="default">Select Season</option>
                    <option value="s2324">23/24</option>
                    <option value="s2425">24/25</option>
                </select><br></br>
                {success==true?<h4>Successfully Submitted </h4>:null}
                <button name="submit" className="btun" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default AddPlayerForm;