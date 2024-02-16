import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
        await db.none(`
          -- Creazione della tabella users
          DROP TABLE IF EXISTS users;
          CREATE TABLE users (
              id SERIAL NOT NULL PRIMARY KEY,
              email TEXT NOT NULL,
              password TEXT NOT NULL,
              token TEXT
          );
      
          -- Creazione della tabella categories
          DROP TABLE IF EXISTS categories;
          CREATE TABLE categories (
              id SERIAL PRIMARY KEY,
              name TEXT
          );
      
          -- Creazione della tabella products
          DROP TABLE IF EXISTS products;
          CREATE TABLE products (
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              description TEXT,
              image TEXT,
              price NUMERIC NOT NULL,
              category_id INT REFERENCES categories(id)
          );
      
          -- Inserimento dei dati delle categorie
          INSERT INTO categories (name) VALUES 
              ('MYS'),
              ('Gadgets');
      
          -- Inserimento dei dati dei prodotti
          INSERT INTO products (name, description, image, price, category_id) VALUES 
              ('Game', 'Description for Game', 'game_image.jpg', 29.99, 1),
              ('Bundle', 'Description for Bundle', 'bundle_image.jpg', 49.99, 1 ),
              ('Sleeves', 'Description for Sleeves', 'sleeves_image.jpg', 9.99, 1),
              ('Figure', 'Description for Figure', 'figure_image.jpg', 19.99, 1),
              ('Poster', 'Description for Poster', 'poster_image.jpg', 14.99, 2),
              ('Mat', 'Description for Mat', 'mat_image.jpg', 24.99, 2),
              ('Artbook', 'Description for Artbook', 'artbook_image.jpg', 39.99, 2),
              ('Dice', 'Description for Dice', 'dice_image.jpg', 4.99, 2)
          ;
        `);
      

  const email = 'develhope@example.com';
  const password = 'develhope';

  await db.none('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
};

setupDb();

export { db }