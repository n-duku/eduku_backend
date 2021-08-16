const express = require('express');
const route = express.Router();
const db = require('../../config/db');


//Creating routes
route.get('/question/:id', async (req,res)=>{

})

route.post('/question', async(req,res)=>{
    try{
        console.log(req.body)
        const created = await db.models.questions.bulkCreate(req.body)
       res.status(200).send(created)
      }catch(e){
          console.error(e);
          res.status(400).send(e)
      }
})


route.put('/question', (req, res)=>{
    res.status(200).send({1: 'first question'})
})


route.delete('/question', (req, res)=>{
    res.status(200).send({1: 'first question'})
})



module.exports = route;