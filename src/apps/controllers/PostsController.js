const Posts = require('../models/Posts');

class POstsController{

    async create(req, res){
        const {image, description} = req.body;

        const {newPost} = await Posts.create({
            image, 
            description,
            author_id: req.userId
        });
        if(!newPost){
            return res.status(400).json({message: 'Falha ao criar post'});

        }

        return res.status(200).json({data:{image, description}});

    }

    async delete(req, res){
        const {id} = req.params;

        const verifyPost = await Posts.findOne({
            where: {
                id,
                author_id: req.userId
            },
        });
        if(!verifyPost){
            return res.status(404).json({message: 'Post não existe'});

        }
        if(verifyPost.author_id !== req.userId){

            return res.status(401).json({message: 'você não term permissão para deleter esse posts!'});
        }

       const deletePost = await Posts.destroy({
            where: {
                id,
            },
        });
        if(!deletePost){
            return res.status(400).json({message: 'Erro ao deletar post!'});

        }
    return res.status(200).json({message: 'Post deletado'});

    }
}

module.exports = new POstsController();