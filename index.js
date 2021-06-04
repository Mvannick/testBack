const express =  require('express'); 
const session =  require('express-session');

const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

const store = new session.MemoryStore();
const api = express();

api.use(session({
    secret: 'some secret',
    saveUninitialized: false,
    store
}))

api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
})

api.use('/users', usersRoute);
api.use('/posts', postsRoute);


api.listen(5000, () => { console.log("Serveur encours d\'execution !!!") });