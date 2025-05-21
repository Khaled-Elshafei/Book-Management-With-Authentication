 const bcrypt = require('bcrypt')
 const userSchema = require('./models/users.model')
 const jwt = require('jsonwebtoken')
 exports.register = async function(req,res){
    try{
        let newUser = new userSchema(req.body)
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)
        newUser.password = await hashedPassword
        newUser.save()      
        res.json({message:"user registered successfully",newUser:{email:newUser.email,name:newUser.name}})
    }catch(err){
        res.status(400).send({message:err})

    }
 }

 exports.login = async function(req,res){
    try{
        let user = await userSchema.findOne({email: req.body.email })

        if(!user || !await user.comparePassword(req.body.password)){
            return res.status(400).send({message:"Invalid email or password"})
        }else {
            const token = jwt.sign({email:user.email,_id_:user._id_,role:user.role},'secretKey')
           return res.send({message : " logged in successfully",user: { email:user.email,name:user.name,jwt:token}})
        }
            
    }catch(err){
        res.status(400).send({message:err.message})
    }
 }