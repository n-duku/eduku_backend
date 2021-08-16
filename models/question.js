

//creating question model template in javascript

module.exports = (sequelize, sequelizer) => {
    const Questions = sequelize.define('questions', {
        question_id: {
            type: sequelizer.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: sequelizer.STRING(255),
            allowNull: false
        },
        correct_ans: {
            type: sequelizer.STRING(300),
            allowNull: false
        },
        duration: {
            type: sequelizer.INTEGER,
            allowNull: false
        },
        min_pt: {
            type: sequelizer.INTEGER,
            allowNull: false
        },
        max_pt: {
            type: sequelizer.INTEGER,
            allowNull: false
        }
    });

}
