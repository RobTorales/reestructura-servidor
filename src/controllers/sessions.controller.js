import { createHash, isValidPassword, passportCall, authorization } from "../utils.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import { userModel } from "../dao/models/user.model.js";
const PRIVATE_KEY = "S3CR3T0";

class SessionsController {
    constructor (){
        this.SessionsService = new SessionsService();
    }

    loginUser = async (req, res) => {
        const { email, pass: password } = req.body;
    
    
        let user = await userModel.findOne({ email: email });
    
    
        if (!user) {
            return res.status(401).send({ status: "error", message: "Error! El usuario no existe!" });
        }
    
    
        let token = jwt.sign({ email, password, role: user.role }, PRIVATE_KEY, { expiresIn: "24h" });
        res.cookie("robCookieToken", token, { maxAge: 3600 * 1000, httpOnly: true });
    
    
        return res.status(200).json({ status: "success", redirect: "/products" });
    }

    logOut = async (req, res) => {
        req.session.destroy;
        res.redirect("/");
    }

    Register = async (req, res) => {
        return res.redirect("/login");
    }

    restorePassword = async (req, res) => {
        let {user, pass} = req.query;
        pass = createHash(pass);
        const passwordRestored = await UM.restorePassword(user, pass);
    
        if (passwordRestored) {
            res.send({status:"ok", message:"La contraseña se ha actualizado correctamente!"});
        } else {
            res.status(401).send({status:"error", message:"No se pudo actualizar la contraseña!"});
        }    
    }

}