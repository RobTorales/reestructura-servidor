import express from "express";
import SessionController from "../controllers/sessions.controller.js"


const router = express.Router();



router.post("/login", );

router.get("/logout", );

router.post("/register", passport.authenticate("register", {failureRedirect:"/failregister"}), );

router.get("/restore", );

router.get("/current", passportCall("jwt"),  (req, res) => {
    res.send({status:"OK", payload:req.user});
});

router.get("/github", passport.authenticate("github", {scope:["user:email"]}), async (req, res) => {});

router.get("/githubcallback", passport.authenticate("github", {failureRedirect:"/login"}), async (req, res) => {
    req.session.user = req.user;
    req.session.loggedIn = true;
    res.redirect("/products");
});

 
export default router;


