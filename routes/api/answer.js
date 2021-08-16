const express = require('express');
const route = express.Router();


//Creating routes
route.get('/answer', (req,res)=>{
    res.status(200).send({data: []})
})

route.post('/answer', (req,res)=>{
    res.status(200).send({1: 'first question'})
})


route.put('/answer', (req, res)=>{
    res.status(200).send({1: 'first question'})
})


route.delete('/answer', (req, res)=>{
    res.status(200).send({1: 'first question'})
})



module.exports = route;