import passport from "passport";
const authorize = (req,res,next) => {
passport.authenticate("jwt", { session: false }, (err, user) => {
    if(!user || err) {
        res.status(401).json({ msg: "Unauthorized" });
}else{
    req.user = user; 
    next();
}
})(req, res, next)
}
export default authorize;