import React from 'react';

function DeletePlayer(){
    const [playerstats,setStats]=React.useState([]);

    async function handleSubmit(event){
        event.preventDefault();
        console.log(playerstats);
        const result = await fetch('https://bluemoonstats.onrender.com/deleteplayer',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(playerstats)
        })
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
    return (
        <form className="form">
             <p className="heading">Remove Player </p>
            <div className="Input"
            onSubmit={handleSubmit}>
                
                    <div className="input-data">
                        <input type="number" name="jerseynumber" placeholder="" onChange={handleChange} autoComplete='off' required className="input"></input>
                        <label>Enter Jersey Number</label>
                    </div>
                    <div className="input-data">
                        <input type="text" placeholder ="" 
                name ="playername" className="input" 
                onChange={handleChange} autoComplete='off' required ></input><br></br>
                        <label>Enter Player Name (Optional)</label>
                    </div>
                    <div className="input-data">
                        <input type="number" placeholder ="" 
                name ="age" className="input" autoComplete='off' required></input><br></br>
                        <label>Enter Age (Optional)</label>
                    </div>
                <select name="position" id="position-dropdown" className="input-selector" onChange={handleChange} autoComplete='off'>
                    <option value="null" className="defaults">Choose Position  (Optional)</option>
                    <option value="GK"className="position" >GK</option>
                    <option value="Defender" className="position">Defender</option>
                    <option value="Midfielder"className="position">Midfielder</option>
                    <option value="Forward"className="position">Attacker</option>
                </select><br></br>
                <select aria-label ="year" name="year" id="options" className="input-selector"onChange={handleChange}>
                    <option value="default">Select Season</option>
                    <option value="s2324">23/24</option>
                    <option value="s2425">24/25</option>
                </select>
                <button type="submit" className="submitbutton btun">Remove</button>
                </div>
        </form>
    );
}

export default DeletePlayer;