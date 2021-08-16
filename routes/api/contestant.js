const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const db = require('../../config/db');

//Creating routes
route.get('/contestant', (req,res)=>{
    res.status(200).send({data: []})
})

route.post('/contestant', async (req,res)=>{
   try{
    console.log(req.body);
    const created = await db.models.contestants.create(req.body)
    res.status(200).send(created)
   }catch(e){
       console.error(e);
       res.status(400).send(e)
   }
})

route.post('/contestants', async (req,res)=>{
    try{
        
     const created = await db.models.contestants.bulkCreate(req.body)
     res.status(200).send(created)
    }catch(e){
        console.error(e);
        res.status(400).send(e)
    }
 })

route.put('/contestant', (req, res)=>{
    res.status(200).send({1: 'first question'})
})


route.delete('/contestant', (req, res)=>{
    res.status(200).send({1: 'first question'})
})



module.exports = route;