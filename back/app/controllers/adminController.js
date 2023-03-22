const { Pokemon} = require('../models');
// importer model User
const User = require('../models/user');



const adminController = {

    getAllUsers: async (req, res) => {
        const users = await User.findAll();
        const message = 'La liste des utilisateurs est disponible'
        res.json({ message, users });
    },

    getUserById: async (req, res) => {
        const userId = Number(req.params.id);
        const user = await User.findByPk(userId);
        const message = `L'utilisateur "${user.prenom} ${user.nom} est disponible`
        res.json({ message, user });
    },
    deleteUser: async (req, res) => {
        const userId = Number(req.params.id);
        const user = await User.findByPk(userId);
        await user.destroy();
        const message = `L'utilisateur "${user.prenom} ${user.nom} à bien été supprimé`
        res.json({ message, user });
    },




    deletePokemon : async (req, res) => {
        const pokemonId = Number(req.params.id);
        const pokemon = await Pokemon.findByPk(pokemonId);
        await pokemon.destroy();
        const message = `Le pokemon "${pokemon.nom} à bien été supprimé`
        res.json({ message, pokemon });
    }

}
module.exports = adminController;

