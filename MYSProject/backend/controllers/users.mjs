import * as dotenv from "dotenv";
import { db } from "../db.mjs";
import jwt from "jsonwebtoken";
dotenv.config();

const logIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await db.one("SELECT * FROM users WHERE email=$1", email);

  if (user && user.password === password) {
    const payload = {
      id: user.id,
      email,
    };
    const { SECRET = "" } = process.env;
    const token = jwt.sign(payload, SECRET);

    console.log(token);

    await db.none("UPDATE users SET token=$2 WHERE email=$1", [email, token]);
    res.status(200).json({ id: user.id, email: user.email, token: token });
  } else {
    res.status(400).json({ msg: "Invalid credentials" });
  }
};

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await db.oneOrNone("SELECT * FROM users WHERE email=$1", email);

  if (user) {
    res.status(400).json({ msg: "User already exists" });
  } else {
    try {
      const { id } = await db.one(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id",
        [email, password]
      );
      res.status(201).json({ id, msg: "User created successfully" });
    } catch (error) {
      console.error("Error during user creation:", error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
export { logIn, signUp };
