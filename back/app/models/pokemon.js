const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');



// ici on crée une classe Pokemon qui hérite du modèle proposé par sequelize
class Pokemon extends Model{}

Pokemon.init({ 
    nom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pv: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    attaque: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    defense: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    pv: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    attaque_spe: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    defense_spe: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    vitesse: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        // si on ne veut pas que la valeur puisse être égale à null : 
        allowNull: false
    },

}, {
    sequelize: sequelize,
    tableName: 'pokemon'

});


module.exports = Pokemon;
