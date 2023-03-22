const Client = require('../models/user');
const bcrypt = require('bcrypt')
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userController = {

    signup: async (req, res) => {
        try {
            const { email, password, role, prenom, nom } = req.body;
            if (!validator.isEmail(email)) {
                const message = 'Email invalide'
                res.status(400).json({ message });
            } else {
                const user = await Client.findOne({ where: { email: email } });
                if (user) {
                    const message = 'Cet email est déjà utilisé'
                    res.status(409).json({ message });
                } else {
                    const hash = bcrypt.hashSync(password, 10);
                    const newUser = await Client.create({ email: email, password: hash, role: role, prenom: prenom, nom: nom });
                    const message = 'Vous êtes inscrit'
                    res.status(201).json({ message, newUser });
                }
            }
        }
        catch (error) {
            console.trace(error);
            const message = 'Une erreur est survenue lors de l\'inscription'
            res.status(500).json({ message, error: error.toString() });
        }
    },


    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Client.findOne({ where: { email: email } });
            if (user) {
                const match = bcrypt.compareSync(password, user.password);
                if (match) {
                    const message = 'Vous êtes connecté'
                    const secret = process.env.SECRET;
                    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, secret, { expiresIn: '1h' });
                    res.json({ message, user, token });
                } else {
                    const message = 'Mot de passe incorrect'
                    res.status(401).json({ message });
                }
            } else {
                const message = 'Cet email n\'existe pas'
                res.status(404).json({ message });
            }
        }
        catch (error) {
            console.trace(error);
            const message = 'Une erreur est survenue lors de la connexion'
            res.status(500).json({ message, error: error.toString() });
        }
    },
}

module.exports = userController;


