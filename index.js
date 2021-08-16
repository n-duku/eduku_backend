//How to access environment variables
require('dotenv').config();

//Importing depencies for project
const express = require('express');
const cors = require('cors');


//Initialising Express and avoiding Cross Scripting
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

const verifyToken = require('./utils/verifyToken');

const routes = {
    login: require('./auth/authenticate'),
    users: require('./routes/users'),
    quizapi: require('./routes/api/quiz'),
    contestants: require('./routes/api/contestant'),
    question: require('./routes/api/question')
}

app.use('/api/v1', routes.login); 
app.use('/api/v1', verifyToken, routes.users);
app.use('/api/v1', verifyToken, routes.quizapi);
app.use('/api/v1', verifyToken, routes.contestants);
app.use('/api/v1', verifyToken, routes.question);


app.get('/', (req,res)=>{
    res.status(200).send('Hello, welcome to my API, we go do am BIG!');
})


app.listen(port, async ()=>{
    try{
        const db = require('./config/db');
        await db.authenticate()
        // await db.sync({alter: true});
        // console.log(db.models)
    }catch(e){
        console.log(e);
    }
    console.log(`We live baby! on Port: ${port}`);
})