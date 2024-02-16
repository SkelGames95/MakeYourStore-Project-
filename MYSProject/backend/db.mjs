import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
  console.log("Starting")
  await db.none(`
    
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      token TEXT
    );
    `);


const email = 'develhope@example.com';
const password = 'develhope';

await db.none('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
console.log("Success")
};

export { db,setupDb };
