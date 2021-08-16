const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db');



module.exports = route.post('/login', (req, res) => {
    jwt.sign(req.body, process.env.SECRETKEY, async (err, token) => {
        if (err) {
            res.sendStatus(403)
        } else {
            try {
                const userExists = await db.models.users.findOne( { where: { username: req.body.username }})
                if(userExists){
                    if(req.body.password === userExists.password){
                        // so on the frontend when the data is received save it in the session
                        //ok lets go to frontend
                        res.json({data: token, username: userExists.username, user_id: userExists.user_id, isAdmin: userExists.isAdmin});
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