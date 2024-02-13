import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id SERIAL NOT NULL PRIMARY KEY,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT,
    );
    `);
    await db.none(`INSERT INTO users (email, password) VALUES ('develhope@example.com', 'develhope')`);
};
setupDb();
export { db };
