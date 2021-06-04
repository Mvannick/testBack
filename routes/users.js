const { Router } = require('express');

const router = Router();

const users = [
    { name: 'Mac', prenom: 'prenom 1', age: 20 },
    { name: 'Eliane', prenom: 'prenom 2', age: 19 }
];


router.use((req, res, next) => {
    console.log(" Requetes pour les utilisateurs !!!");
    next();
});

router.get('/', (req, res) => {
    res.send(200);
});

module.exports = router;