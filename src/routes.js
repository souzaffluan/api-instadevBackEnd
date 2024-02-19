const {Router} = require('express');
const {upload} = require('./configs/multer');
const schemaValidator = require('./apps/middlewares/schemaValidator');
const userSchema = require('./schema/create.user.schema.json');

const FileController = require('./apps/controllers/FileController');

const AuthenticationMiddleware = require('./apps/middlewares/authentication');

const authSchema = require('./schema/authschema.json');
const UserController = require('./apps/controllers/UserController');
const AutenticationController = require('./apps/controllers/AutenticationController');
const routes = new Router();

const PostsController = require('./apps/controllers/PostsController');
const postSchema = require('./schema/post.schema.json');

routes.post('/users', schemaValidator(userSchema), UserController.create);

routes.post('/auth', schemaValidator(authSchema), AutenticationController.authenticate);



routes.get('/health', (req, res)=>{
    return res.send({message: 'Conectado com sucesso!'});
});

routes.use(AuthenticationMiddleware);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);
routes.get('/user-profile', UserController.userProfile);

routes.post('/upload', upload.single('image'), FileController.upload);

routes.post('/new-post', schemaValidator(postSchema), PostsController.create);
routes.delete('/delete-post/:id', PostsController.delete);






module.exports = routes;