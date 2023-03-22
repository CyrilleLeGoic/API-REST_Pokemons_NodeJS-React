const { Pokemon } = require('../models');

const favorisController = {

    favoritesJSON:  (req, res) => {
        const message = 'La liste des pokemons est disponible'
        res.json({ message, pokemons: req.session.favoris });
    },
    

    addFavorite: async (req, res) => {
        const pokemonId = Number(req.params.id);
        const pokemon = await Pokemon.findByPk(pokemonId);

        if (!req.session.favoris) {
            req.session.favoris = [];
        }

        const alreadyInFavoris = req.session.favoris.find((pokemon) => pokemon.id === pokemonId);

        if (!alreadyInFavoris) {
            req.session.favoris.push(pokemon);
        }

        const message = `Le pokemon ${pokemon.nom} à bien été ajouté aux favoris`
        res.json({ message, pokemon });
    },

    deleteFavorite: async (req, res) => {
        const pokemonId = Number(req.params.id);
        const pokemon = await Pokemon.findByPk(pokemonId);

        if (!req.session.favoris) {
            req.session.favoris = [];
        }
        const presentInFavorites = req.session.favoris.find((pokemon) => pokemon.id === pokemonId);
        if (presentInFavorites) {
            req.session.favoris = req.session.favoris.filter((pokemon) => pokemon.id !== pokemonId);
        }
        const message = `Le pokemon ${pokemon.nom} à bien été supprimé des favoris`
        res.json({ message, pokemon });
    }
}
module.exports = favorisController;

