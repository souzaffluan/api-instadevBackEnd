const Users = require("../models/Users");

class UserController {
  async create(req, res) {
    const verifyUser = await Users.findOne({
        where: {
            email: req.body.email,
        },
    });

    if(verifyUser){
        return res.status(400).json({message: 'Usuário já existente'});
    }
    const user = await Users.create(req.body);
    if(!user){
        return res.status(400).json({message: 'Erro ao cadastrar usuário'});
    }
    return res.send({ messege: 'Usuário cadastrado'});
  }
}
module.exports = new UserController();
