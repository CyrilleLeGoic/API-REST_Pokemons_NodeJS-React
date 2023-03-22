const { Model, DataTypes } = require('sequelize');
const database = require('../database');



// ici on crée une classe Type qui hérite du modèle proposé par sequelize
class Type extends Model{}

Type.init({ 
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    color: {
        type: DataTypes.TEXT,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },

}, {
    sequelize: database,
    tableName: 'type'

});


module.exports = Type;
