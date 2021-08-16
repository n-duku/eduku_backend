

module.exports = (sequelize, sequelizer ) => {
    //creating user model template in javascript
    const Contestant = sequelize.define('contestants',{
        contestant_id: {
            type: sequelizer.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelizer.STRING(255),
            allowNull: false
        },
        score:{
            type: sequelizer.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
});

}

