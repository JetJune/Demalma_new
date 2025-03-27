import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import validator from "validator";

// User login
const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user){
           return res.json({succcess:false, message:"L'utilisateur n'existe pas."})
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if(!isMatched){
            return res.json({succcess:false, message:"Informations de connexion invalid!"})
        }

        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.json({succcess:false, message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// User registration
const userRegistration = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        // Does user already exists
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({succcess:false, message:"Compte deja existant, connectez vous !"})
        }
        // validating email format & strong password
        if (!validator.isEmail(email)){
            return res.json({succcess:false, message:"entrez un mail valide svp!"})
        }

        if (password.length < 8){
            return res.json({succcess:false, message:"Entrez un mot de fort svp."})
        }

        // Hashing user passwd
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //New user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,

        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({succcess:true, token})

    } catch (error) {
        console.log(error);
        res.json({succcess:false, message:"Error"})
    }
}

export {userLogin, userRegistration}