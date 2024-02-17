const {Router} = require('express');

const routes = new Router();

routes.get('/health', (req, res)=>{
    return res.send({message: 'Conectado com sucesso!'});
});

module.exports = routes;