const express = require('express');
const route = express.Router();
const db = require('../../config/db');


//Creating routes
route.get('/quizzes/:id', async (req,res)=>{
    try{
        const quizzes = await db.models.quiz.findAll({
            where: {
                quizmasterUserId: req.params.id 
            }
        })
       res.status(200).send(quizzes)
      }catch(e){
          console.error(e);
          res.status(400).send(e)
      }
})


route.get('/quiz/:id', async (req,res)=>{
    try{
        const quizzes = await db.models.quiz.findOne({
            where: {
                quiz_id: req.params.id 
            }
        })
        const questions = await db.models.questions.findAll({
            where: {
                quizquestionsQuizId: req.params.id 
            }
        })
        const participants = await db.models.contestants.findAll({
            where: {
                participantsQuizId: req.params.id
            }
        })
        res.status(200).send({questions, participants, quizzes})
      }catch(e){
          console.error(e);
          res.status(400).send(e)
      }
})

route.post('/quiz', async (req,res)=>{
    try{
        const created = await db.models.quiz.create(req.body)
       res.status(200).send(created)
      }catch(e){
          console.error(e);
          res.status(400).send(e)
      }
})



route.put('/quiz', (req, res)=>{
    res.status(200).send({1: 'first question'})
})


route.delete('/quiz/:id', async (req, res)=>{
    try {
        const deleted = await db.models.quiz.destroy({
            where: {
                quiz_id: req.params.id
            }
        })
        res.status(200).send({message: `${deleted} has been deleted`})
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: 'Could not find quiz' })
    }
})



module.exports = route;