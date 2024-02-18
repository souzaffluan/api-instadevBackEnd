const {Router} = require('express');
const schemaValidator = require('./apps/middlewares/schemaValidator');
const userSchema = require('./schema/create.user.schema.json');
const UserController = require('./apps/controllers/UserController');
const routes = new Router();

routes.post('/users', schemaValidator(userSchema), UserController.create);

routes.get('/health', (req, res)=>{
    return res.send({message: 'Conectado com sucesso!'});
});

module.exports = routes;