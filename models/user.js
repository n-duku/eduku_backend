

module.exports = (sequelize, sequelizer ) => {
    //creating user model template in javascript
    const Users = sequelize.define('users',{
        user_id: {
            type: sequelizer.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: sequelizer.STRING(255),
            allowNull: false
        },
        password:{
            type: sequelizer.STRING(300),
            allowNull: false
        },
        isAdmin:{
            type: sequelizer.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
});

}

