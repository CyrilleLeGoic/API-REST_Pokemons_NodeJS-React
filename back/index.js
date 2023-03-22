// import modules
const express = require('express');
const cors = require('cors');
const router = require('./app/router');
const session = require('express-session');
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const app = express();

// cors policy

app.use(cors({
   /* toute les origines sont autorisées */
    origin: '*',
}));


// Initialize .env
require('dotenv').config();

// Port
const port = process.env.PORT || 3000;

// file static
app.use(express.static('public'));
// Use session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Send data in json format
app.use(express.json());
// Use xss to prevent XSS attacks for all routes
app.use(xss());
// Catch data from body of request
app.use(express.urlencoded({ extended: true }));
// Use body parser to catch data from body of request
app.use(bodyParser.json());
// Router
app.use(router);

// Gestion des 404 (not found)
app.use((req, res, next) => {
    const message = `La ressource demandée ${req.url} n'existe pas`;
    res.status(404).json({ message });
});



// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);
