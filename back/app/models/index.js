const Pokemon = require('./pokemon');
const Type = require('./type');





Pokemon.belongsToMany(Type, {
    as: "types",
    through: 'pokemon_type',
    sourceKey: 'numero',

})


Type.belongsToMany(Pokemon, {
    as: "pokemons",
    through: 'pokemon_type',
})







module.exports = {Pokemon, Type}