// sequelize config with database

const { Sequelize } = require('sequelize');

const uri = "postgresql://pokedex:pokedex@localhost/pokedex"

// connect to database
const sequelize  = new Sequelize(uri, {
    define: {
        underscored: true,
        logging: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',

    },
        }
        );

module.exports = sequelize;



