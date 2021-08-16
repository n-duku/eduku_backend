

//creating quiz model template in javascript

module.exports = (sequelize, sequelizer) => {
    const Quiz = sequelize.define('quiz', {
        quiz_id: {
            type: sequelizer.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: sequelizer.STRING(255),
            allowNull: false
        },
        description: {
            type: sequelizer.TEXT,
            allowNull: true
        }
    });

}