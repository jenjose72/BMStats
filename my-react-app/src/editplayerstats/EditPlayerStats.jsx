import React from 'react';


function EditPlayerStats(){ 
    const [success,setSuccess]=React.useState();
   
    const [playerstats,setStats]=React.useState([]);
   
    async function handleSubmit(event){
        setSuccess(false);
        event.preventDefault();
        console.log(playerstats);
        const result = await fetch('https://bluemoonstats.onrender.com/editplayerstatsroute',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(playerstats)
        })
        
        setSuccess(result.ok);
        console.log(result.ok);
        console.log(success);
    }

    function handleChange(event){
        const {name,value} = event.target;
        setStats((prevValue)=>{
            return{
               ...prevValue,
                [name]:value
            }
        });
    }
    return(
        <form className="form editplayer-stats">
            <p className="heading">Edit Player Stats</p>
            <div class="Input"
            onSubmit={handleSubmit}>
                    <div className="input-data"><input type="number" name="jerseynumber" placeholder="" onChange={handleChange} autoComplete='off' required className="input"></input>
                        <label>Enter Jersey Number</label><br></br>
                    </div>
                    <div className="input-data">
                        <input type="number" name="goal" placeholder="" onChange={handleChange} autoComplete='off' required className="input"></input>
                        <label>Enter No: of goals to be Added</label><br></br>
                    </div>
                    <div className="input-data">
                        <input type="number" name="assist" placeholder="" onChange={handleChange} autoComplete='off' required className="input"></input>
                        <label>Enter No: of assists to be Added</label><br></br>
                    </div>
                    <div className="input-data">
                       <input type="number" name="matchesplayed" placeholder="" onChange={handleChange} autoComplete='off' required></input> 
                       <label> Enter No: of matches to be Added</label><br></br>
                    </div>
                    <div className="input-data">
                        <input type="number" name="minutesplayed" placeholder="" onChange={handleChange} autoComplete='off' required className="input"></input><label></label>
                        <label>Enter No: of minutes to be Added</label><br></br>
                    </div> 
                <select aria-label ="year" name="year" id="options" onChange={handleChange} className="input-selector">
                    <option value="default">Select Season</option>
                    <option value="s2324">23/24</option>
                    <option value="s2425">24/25</option>
                </select>
                {success==true?<h4>Successfully Submitted </h4>:null}
                <button type="submit" className="submitbutton btun">Update</button>
                </div>
                

        </form>
    );
}

export default EditPlayerStats;