const express = require('express');
const route = express.Router();
const db = require('../config/db');
const jwt = require('jsonwebtoken');



route.post('/login', (req, res) => {
    jwt.sign(req.body, process.env.SECRETKEY, async (err, token) => {
        if (err) {
            res.sendStatus(403)
        } else {
            try {
                const userExists = await db.models.users.findOne( { where: { username: req.body.username }})
                if(userExists){
                    if(req.body.password === userExists.password){
                        res.status(200).send({data: token});
                    }else{
                        res.status(400).send({data: 'Wrong password'})
                    }
                }else{
                    res.status(400).send({data: "User does not exists"})
                }
            } catch (error) {
                console.error(error)
            }
        }
    });
})

route.get('/users', async (req,res) => {
    try{
        const users = await db.models.users.findAll({
            where: {
                isAdmin: false 
            }
        })
       res.status(200).send(users)
      }catch(e){
          console.error(e);
          res.status(400).send(e)
      }
})

route.post('/user', async (req, res) => {
    try {
        const created = await db.models.users.create(req.body)
        res.status(200).send(created)
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Wrong format' })
    }
})

route.delete('/user/:id', async (req, res) => {
    try {
        const deleted = await db.models.users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).send({message: `${deleted} has been deleted`})
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Wrong format' })
    }
})




module.exports = route;