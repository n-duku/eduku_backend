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

route.post('/user', async (req, res) => {
    try {
        const created = await db.models.users.create(req.body)
        res.status(200).send(created)
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Massa make steady' })
    }
})



module.exports = route;