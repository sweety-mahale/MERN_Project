const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');


async function userSignUpController(req,res){
    try{
        const { email, password, firstname, lastname} = req.body

        const user = await userModel.findOne({email})

        console.log("user",user)

        if(user){
            throw new Error("Already user exits.")
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!firstname){
            throw new Error("Please provide firstname")
        } 
        if(!lastname){
            throw new Error("Please provide lastname")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpController