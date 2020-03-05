import User from '../models/user';

class UserController{
    async getAll(req,res){
        try{
            const data = await User.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getById(req,res){
        try{
            const data = await User.find(req.params.id);
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async create(req,res){
        try{
            //console.log(req.body)
            const data = await User.create(req.body);
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json({error:'erro'});
        }
    }

    async update(req,res){
        return await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
            },
            (err,result)=>{
                if (err){
                    return res.status(404).json(err);
                } else {
                    return res.status(200).json(result);
                }
            }
        )
    }

    async delete(req,res){
        return await User.findByIdAndDelete(req.params.id, (err,result) =>{
            if (err){
                return res.status(404).json(err);
            } else {
                return res.status(200).json({message: 'Usuário deletado'});
            }
        });
    }
}

export default new UserController();