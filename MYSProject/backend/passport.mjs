import * as dotenv from "dotenv"; //AUTENTICAZIONE UTENTE
import passport from "passport";
import passportJWT from "passport-jwt";
dotenv.config();

const { SECRET } = process.env;
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const users = db.one("SELECT *FROM users WHERE email=$1", payload.email);
      console.log(users);

      try {
        return users ? done(null, users) : done(new Error("User not found"));
      } catch (error) {
        done(error);
      }
    }
  )
);
