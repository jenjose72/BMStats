import express from 'express';
import cors from 'cors';
import db from './database.js';
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import { Strategy } from 'passport-local';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import env from 'dot-env';
import postgres from 'postgres';

try {
    db.connect();
} catch (error) {
    console.error(error);
}
const app = express();
const saltRounds=10;
env.config();

app.use(cors({
    //origin:["https://bluemoonstats-3gfn.onrender.com"],
    origin:"http://localhost:5173",
    methods:["GET", "POST"],
    credentials:true,
    allowedHeaders: ['Authorization', 'Content-Type', 'Accept','Access-Control-Allow-Origin'],
    exposedHeaders: ['Set-Cookie']
}));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,//check this part
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/Stats',async(req,res)=>{
    try {
        const result = await db.query('SELECT name,jerseynumber,goals FROM s2324 ORDER BY goals DESC limit 5;')
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getting /Stats");
    }
})
// get player list 
app.get('/getplayerlist',async(req,res)=>{
    try {
        const  result = await db.query('SELECT * FROM s2324');
        //console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get various stats here

//get assists
app.get('/getAssists',async(req,res)=>{
    try {
        const result = await db.query('SELECT name,jerseynumber,assists FROM s2324 ORDER BY assists DESC limit 5;')
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getting /getAssists");
    }
})

//get ga
app.get("/getga",async(req,res)=>{
    try {
        const result = await db.query('SELECT name,jerseynumber,ga FROM s2324 ORDER BY ga DESC limit 5;')
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getting /ga");
    }
})

//get minutes played
app.get("/getmp",async(req,res)=>{
    try {
        const result = await db.query('SELECT name,jerseynumber,minutesplayed FROM s2324 ORDER BY minutesplayed DESC limit 5;')
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        console.log("Error at getting /getmp");
    }
})

//add player here 
app.post('/addplayer',async(req,res)=>{
    try {
       
       const playerdetails = req.body;
       if(playerdetails.year=="s2324"){
        const result = await db.query('INSERT INTO s2324 (name,jerseynumber,age,position) VALUES ($1,$2,$3,$4)',[playerdetails.playername,playerdetails.jerseynumber,playerdetails.age,playerdetails.position]);
        res.send('Player Added Successfully');
       }
       else if(playerdetails.year=="s2425"){
        const result = await db.query('INSERT INTO s2425 (name,jerseynumber,age,position) VALUES ($1,$2,$3,$4)',[playerdetails.playername,playerdetails.jerseynumber,playerdetails.age,playerdetails.position]);
        res.send('Player Added Successfully');
       }
       console.log(playerdetails);
    } catch (error) {
        console.log(error.message);
        console.log("Error at /addplayer");
    }
})

//receive and update player stats here

app.post('/editplayerstats',async(req,res)=>{
    
    try {
        let i=0;
        let goals=0;
        const playerdetails = req.body;
        if(playerdetails.year=="s2324"){
            console.log('hehehe');
            const result= await db.query('SELECT * FROM s2324 WHERE jerseynumber =($1)',[playerdetails.jerseynumber]);
                goals=result.rows[0].goals+parseInt(playerdetails.goal);
                let assists = result.rows[i].assists+parseInt(playerdetails.assist);    
                let ga= goals+assists;
                let minutesplayed = result.rows[i].minutesplayed+parseInt(playerdetails.minutesplayed);
                let matchesplayed = result.rows[i].matchesplayed+parseInt(playerdetails.matchesplayed);
            const result2= await db.query('UPDATE s2324 SET goals=$1,assists=$2,ga=$3,minutesplayed=$4,matchesplayed=$5 WHERE jerseynumber=$6' ,[goals,assists,ga,minutesplayed,matchesplayed,result.rows[0].jerseynumber]);
            res.send('something');
            console.log(playerdetails);
        }
        else if(playerdetails.year=="s2425"){
            const result= await db.query('SELECT * FROM s2425 WHERE jerseynumber = $1   ',[playerdetails.jerseynumber]);
            goals=result.rows[0].goals+parseInt(playerdetails.goal);
            let assists = result.rows[i].assists+parseInt(playerdetails.assist);
            let ga= goals+assists;
            let minutesplayed = result.rows[i].minutesplayed+parseInt(playerdetails.minutesplayed);
            let matchesplayed = result.rows[i].matchesplayed+parseInt(playerdetails.matchesplayed);
            const result2= await db.query('UPDATE s2425 SET goals=$1,assists=$2,ga=$3,minutesplayed=$4,matchesplayed=$5 WHERE jerseynumber=$6' ,[goals,assists,ga,minutesplayed,matchesplayed,result.rows[0].jerseynumber]);
        }
        
    } catch (error) {
        console.error(error)
    }
})

//get detailed stats here
app.post("/detailedstats",async(req,res)=>{
    try {
        const result1=req.body;
        console.log(result1);
        if(result1.year=="s2324"){
            if(result1.order=="player-name"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY name ASC');
                console.log(result.rows);
                res.json(result.rows);
            }
            else if(result1.order=="goalss"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY goals DESC');
                console.log(result.rows);
                res.json(result.rows);
            }
            else if(result1.order=="assists"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY assists DESC');
                res.json(result.rows);
            }
            else if(result1.order=="minutesplayed"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY minutesplayed DESC');
                res.json(result.rows);
            }
            else if(result1.order=="matchesplayed"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY matchesplayed DESC');
                console.log(result.rows);
                res.json(result.rows);
            }
            else if(result1.order=="minutesplayed"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY minutesplayed DESC');
                res.json(result.rows);
            }
            else if(result1.order=="age-details"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY age ASC');
                res.json(result.rows);
            }
            else if(result1.order=="position newposition"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2324 ORDER BY position ASC');
                res.json(result.rows);
            }
        }
        else if(result1.year=="s2425"){
            if(result1.order=="name"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY name ASC');
                res.json(result.rows);
            }
            else if(result1.order=="goals"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY goals DESC');
                res.json(result.rows);
            }
            else if(result1.order=="assists"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY assists DESC');
                res.json(result.rows);
            }
            else if(result1.order=="minutesplayed"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY minutesplayed DESC');
                res.json(result.rows);
            }
            else if(result1.order=="matchesplayed"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY matchesplayed DESC');
                res.json(result.rows);
            }
            else if(result1.order=="age"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY age ASC');
                res.json(result.rows);
            }
            else if(result1.order=="position"){
                const result = await db.query('SELECT name,age,position,goals,assists,minutesplayed,matchesplayed FROM s2425 ORDER BY position ASC');
                res.json(result.rows);
            }
        }   
    } catch (error) {
        console.log(error.message);
        console.log("Error at getting /detailedstats");
    }
})

//get playerlist here
app.post("/getplayerlist",async(req,res)=>{
    try {
        const result = req.body;
        console.log(result);
        if(result.year=="s2324"){
            const result = await db.query('SELECT name,age,position,jerseynumber FROM s2324 ORDER BY jerseynumber ASC');
            res.json(result.rows); 
        }
        else if(result.year=="s2425"){
            const result = await db.query('SELECT name,age,position,position,jerseynumber FROM s2425 ORDER BY name ASC');
            res.json(result.rows);
        }
    } catch (error) {
        console.error(error);
    }
})


//update player details here 
app.post('/editplayer',async(req,res)=>{
    const playerdetails= req.body;
    console.log(playerdetails.position);
    const result = await db.query('UPDATE players SET jerseynumber = $1, age = $2, position = $3 WHERE name = $4',[playerdetails.jerseynumber,playerdetails.age,playerdetails.position,playerdetails.name]);
    res.json(result);
})
//delete player here

app.post('/deleteplayer',async(req,res)=>{
    try {
        const playerdetails= req.body;
    if(playerdetails.year=="s2324"){
        const result = await db.query('DELETE FROM s2324 WHERE jerseynumber = $1',[playerdetails.jerseynumber]);
    }
    else if(playerdetails.year=="s2425"){
        const result = await db.query('DELETE FROM s2425 WHERE jerseynumber = $1',[playerdetails.jerseynumber]);
    }
    } catch (error) {
        console.error(error)
    }
})


const verifyUser=(req,res,next)=>{
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.json({message:"You are not authorized"});
    }
    jwt.verify(token,process.env.SESSION_SECRET,(err,user)=>{
        if(err){
            return res.json({message:"Wrong token"});
        }
        req.user=user;
        next();
    })
}

app.get('/admin',verifyUser,async(req,res)=>{
    res.json({Status:"Success"});
})

app.get('/logout',(req,res)=>{
    console.log('logout');
    try {
        res.cookie("Admin","",{maxAge:0});
        res.status(200).json({message:"successfully logged out"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    
    
})

app.post('/login',async(req,res)=>{
    try {
        console.log('hi');
        const details= req.body;
        //console.log(details);
        //console.log(details.username);
        //console.log(details.password);
        const result = await db.query('SELECT password FROM users WHERE username = $1',[details.username]);
        
        //console.log(result.rows[0].password);
        bcrypt.compare(details.password,result.rows[0].password,async(err,result)=>{
            //console.log(result);
            if(result){
                const name=details.username;
                const token=jwt.sign({name},process.env.SESSION_SECRET,{expiresIn:'1d'});
                //console.log(token);
                res.cookie('token',token,{
                    maxAge:1*24*60*60*1000,
                    httpOnly:true,
                    sameSite:"strict"
                });
                res.send({message:"Verified Admin"});
                //res.send(result);

            }   
            else{
                res.sendStatus(401);
            }
        })
    } catch (error) {
        console.error(error)
    }
})

//set Password (using PostMan)
app.post('/setpassword',async(req,res)=>{
    try {
        const details= req.body;
        console.log(details.password);
        bcrypt.hash(details.password,saltRounds,async(err,hashedpassword)=>{
            console.log(hashedpassword);
            const result = await db.query('INSERT INTO users (password,username) VALUES ($1,$2)',[hashedpassword,details.username]);
            console.log(result);
        });
        res.sendStatus(200);
    } catch (error) {
        console.error(error)
    }
})
app.get('/adminpage',(req,res)=>{
    if(req.isAuthenticated()){
        res.json({user:req.user});
    }else{
        console.log(req);
        res.json({message:"not authenticated"});
    }
})
app.listen(3000,()=>{
    console.log('server is running on port 3000 && http://localhost:3000/');
})