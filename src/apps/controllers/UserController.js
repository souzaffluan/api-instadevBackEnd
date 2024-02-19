const Users = require("../models/Users");
const bcryptjs = require("bcryptjs");

class UserController {
  async create(req, res) {
    const verifyUser = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (verifyUser) {
      return res.status(400).json({ message: "Usuário já existente" });
    }
    const user = await Users.create(req.body);
    if (!user) {
      return res.status(400).json({ message: "Erro ao cadastrar usuário" });
    }
    return res.send({ messege: "Usuário cadastrado" });
  }

  async update(req, res) {
    const {
      name,
      avatar,
      bio,
      gender,
      old_password,
      new_password,
      confirm_new_password,
    } = req.body;

    const user = await Users.findOne({
      where: {
        id: req.userId,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "Usuário não exixte" });
    }

    let encryptedPassword = '';
    if (old_password) {
      if (!(await user.checkPassword(old_password))) {
        return res.status(401).json({ message: "A senha antiga não bate" });
      }
      if (!new_password || !confirm_new_password) {
        return res
          .status(401)
          .json({ error: "Precisa confimar a nova senha!" });
      }

      if (new_password !== confirm_new_password) {
        return res
          .status(401)
          .json({ error: "Nova senha não conicide com a confirmação!" });
      }

      encryptedPassword = await bcryptjs.hash(new_password, 8);
    }
    await Users.update(
      {
        name: name || user.name,
        avatar: avatar || user.avatar,
        bio: bio || user.bio,
        gender: gender || user.gender,
        password_hash: encryptedPassword || user.password_hash,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    return res.status(200).json({ message: "Usuário atualizado" });
  }

  async delete(req, res){
    const userToDelete = await Users.findOne({
      where: {
        id: req.userId,
      },
    });
    if(!userToDelete){
      return res.status(400).json({message: "Usuário não existe"});

    }
    await Users.destroy({
      where: {
        id: req.userId,
      }
    });

    return res.status(200).json({message: "Usuário apagado!"});

  }

  async userProfile(req, res){
    const user = await Users.findOne({
      attributes: ['id', 'name', 'user_name', 'email', 'avatar', 'bio', 'gender'],
      where:{
        id: req.userId,
      },
    });
    if(!user){
      return res.status(400).json({message: "Usuário não exixte"});

    }

    const {
      id, name, user_name, email, 
      avatar, bio, gender
    } = user;
    res.status(200).json({user:{
      id, name, user_name, email, 
      avatar, bio, gender
    }});
  }
}
module.exports = new UserController();
