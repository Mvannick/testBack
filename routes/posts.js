const {Router} = require('express');

const router = Router();

const posts = [
    { title: 'Ideatom', date: '2020-12-12' },
    { title: 'Defi', date: '2020-11-12' },
];

router.get('/', (req, res) => {
    res.send(200);
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send("Exemple de creation d'\ un utilisateur !")
})


router.get('/posts', (req, res) => {
    const { title } = req.query;
    if (title) {
        const post = posts.find((post) => post.title === title)
        if (post) res.status(200).send(post);
        else res.status(404).send('Not found');
    }
    res.status(200).send(posts);
})


module.exports = router;