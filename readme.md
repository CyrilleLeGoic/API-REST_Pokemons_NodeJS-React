# API de Pokémons
Cette API Node.js permet d'obtenir des informations sur les Pokémons ainsi que la gestion des favoris pour les utilisateurs et la gestion des utilisateurs et des Pokémons pour les administrateurs.

# La sécurité de l'API
L'identification des utilisateurs fonctionne avec un token JWT. Les tokens sont générés à la connexion. Les tokens sont stockés dans la base de données et sont validés à chaque requête. Les tokens sont valides 24h après leur génération. Les tokens sont invalidés lors de la déconnexion.

Pour se prémunir des failles XSS j'ai utilisé la librairie [xss-clean](https://www.npmjs.com/package/xss-clean) qui permet de nettoyer les entrées utilisateurs.

# Les routes

## Les routes pour les pokemons :
- GET /pokemon : Récupère tous les pokemons
- GET /pokemon/:id : Récupère un pokemon par son id
- GET /pokemon/types/:id : Récupère tous les pokemons d'un type (eau, feu, etc...)
  
## Les routes pour les utilisateurs :
- POST /signup : Enregistre un nouvel utilisateur
- POST /login : Connecte un utilisateur

## Les routes pour les favoris : Accessibles aux utilisateurs connectés
- GET /favorites : Récupère tous les favoris d'un utilisateur
- POST /favorites/add/:id : Ajoute un pokemon aux favoris d'un utilisateur
- DELETE /favorites/delete/:id : Supprime un pokemon des favoris d'un utilisateur

## Les routes pour les administrateurs : Accessibles aux admin
- GET /admin/users : Récupère tous les utilisateurs
- GET /admin/users/:id : Récupère un utilisateur par son id
- DELETE /admin/users/:id : Supprime un utilisateur