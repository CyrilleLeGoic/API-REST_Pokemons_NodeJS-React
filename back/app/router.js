const {Router} = require('express'); 
const router = Router(); 

// import controllers
const pokemonController = require('./controllers/pokemonController');
const userController = require('./controllers/userController');
const favoritesController = require('./controllers/favoritesController');
const adminController = require('./controllers/adminController');

// middlewares to verify roles
const userRole = require('./authentification/userRole');
const adminRole = require('./authentification/adminRole');


// All routes concerning pokemonController
router.get('/pokemon', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemonById);
router.get('/pokemon/type/:id', pokemonController.getPokemonByType);

// All routes concerning userController
router.post('/signup', userController.signup);
router.post('/login', userController.login);

// All routes concerning favoritesController (only for users)
router.get('/favorites', userRole, favoritesController.favoritesJSON);
router.post('/favorites/add/:id', userRole, favoritesController.addFavorite);
router.delete('/favorites/delete/:id', userRole, favoritesController.deleteFavorite);

// All routes concerning adminController for users management (only for admins)
router.get('/admin/users', adminRole, adminController.getAllUsers);
router.get('/admin/users/:id', adminRole, adminController.getUserById);
router.delete('/admin/users/:id', adminRole, adminController.deleteUser);


// All routes concerning adminController for pokemons management (only for admins)
router.delete('/admin/pokemon/:id', adminRole, adminController.deletePokemon);


module.exports = router;
