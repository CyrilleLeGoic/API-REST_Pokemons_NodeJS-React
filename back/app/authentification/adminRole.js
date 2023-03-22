const jwt = require('jsonwebtoken');

adminRole = (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Vous devez être connecté' });
    }
    // est ce que le token est valide
    const secret = process.env.SECRET;
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Vous devez être connecté' });
        }
        // est ce que l'utilisateur est un admin
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Vous n\'avez pas les droits pour accéder à cette ressource' });
        }
        req.user = decoded;
        next();
    });
};


module.exports = adminRole;