const { Pokemon, Type } = require('../models');

const pokemonController = {

    getAllPokemons: async (req, res) => {
        try {
            const pokemons = await Pokemon.findAll({
                include: [{
                    model: Type,
                    as: "types",
                    attributes: ['name', 'color'],
                    through: {
                        attributes: []
                    }
                }]
            });
            const message = 'La liste des pokemons est disponible'
            res.json({ message, pokemons });

        } catch (error) {

            console.trace(error);
            const message = "La liste des pokemons n'a pas pu être récupérée dans la base de données"
            res.status(500).json({ message, error: error.toString() });
        }
    },


    getPokemonById: async (req, res) => {
        try {
            const pokemonId = Number(req.params.id);
            const pokemon = await Pokemon.findByPk(pokemonId, {
                include: [{
                    model: Type,
                    as: "types",
                    attributes: ['name', 'color'],
                    through: {
                        attributes: []
                    }
                }]
            });
            const message = `Le pokemon  ${pokemon.nom} à bien été récupéré`
            res.json({ message, pokemon });

        } catch (error) {

            console.trace(error);
            const message = `Le pokemon n'a pas pu être récupéré dans la base de données`
            res.status(500).json({ message, error: error.toString() });
        }
    },

    getPokemonByType: async (req, res) => {
        try {
            const typeId = Number(req.params.id);
            const pokemons = await Pokemon.findAll({
                include: [{
                    model: Type,
                    as: "types",
                    attributes: ['name', 'color'],
                    through: {
                        attributes: []
                    },
                    where: {
                        id: typeId
                    }
                }]
            });
            const message = `Les pokemons du type ${pokemons[0].types[0].name} ont bien été récupérés`
            res.json({ message, pokemons });

        } catch (error) {

            console.trace(error);
            const message = `Les pokemons du type n'ont pas pu être récupérés dans la base de données`
            res.status(500).json({ message, error: error.toString() });
        }


    }

}



module.exports = pokemonController;






