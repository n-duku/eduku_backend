/********Importing sequelize*******/
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URI);

const modelDefiners = [
    require('../models/user'),
    require('../models/quiz'),
    require('../models/question'),
    require('../models/contestant')
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize, DataTypes);
}

sequelize.models.quiz.belongsTo(sequelize.models.users, {as: 'quizmaster'});
sequelize.models.questions.belongsTo(sequelize.models.quiz, {as: 'quizquestions'});
sequelize.models.contestants.belongsTo(sequelize.models.quiz, {as: 'participants'});





module.exports = sequelize;

