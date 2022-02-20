const model = require('../Models');
const User = model.User
console.log(User);

const createUSer = async(req,res)=>{
    let user =await User.create({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        companyId:req.body.companyId
    })

    res.json(user);
}

const getUser = async(req,res)=>{
    let user =await User.findAll();
    res.json(user);
}

module.exports={
    createUSer,
    getUser,
}