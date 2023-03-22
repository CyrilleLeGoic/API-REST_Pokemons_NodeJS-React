const { Model, DataTypes } = require('sequelize');
const database = require('../database');

// ici on crée une classe User qui hérite du modèle proposé par sequelize
class Client extends Model{}

Client.init({
    // ici on définit les clés liés à notre model User, elle représentent aussi les champs qu'on retrouve dans notre BDD
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    prenom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: true

    }

}, {
    sequelize: database,
    tableName: 'client'

});


module.exports = Client;