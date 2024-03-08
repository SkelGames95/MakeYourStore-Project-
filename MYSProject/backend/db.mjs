import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
    await db.none(`
          -- Creazione della tabella users
          DROP TABLE IF EXISTS users CASCADE;

          CREATE TABLE users (
              id SERIAL NOT NULL PRIMARY KEY,
              email TEXT NOT NULL,
              password TEXT NOT NULL,
              token TEXT
          );
      
          -- Creazione della tabella categories        
        DROP TABLE IF EXISTS categories CASCADE;
          CREATE TABLE categories (
            id SERIAL PRIMARY KEY,
            name TEXT
          );
      
          -- Creazione della tabella products
          DROP TABLE IF EXISTS products CASCADE;
          CREATE TABLE products (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            image TEXT,
            price NUMERIC NOT NULL,
            category_id INT REFERENCES categories(id)
            );
              
          --Creazione della tabella reviews
          DROP TABLE IF EXISTS reviews CASCADE;
          CREATE TABLE reviews (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            productId INT REFERENCES products(id),
            description TEXT,
            rating INT
            );
      
          -- Inserimento dei dati delle categorie
          INSERT INTO categories (name) VALUES 
              ('MYS'),
              ('Gadgets');
      
          -- Inserimento dei dati dei prodotti
          INSERT INTO products (name, description, image, price, category_id) VALUES 
              ('Game', 'Description for Game', 'https://pyramidinternational.com/cdn/shop/products/wdc98146.jpg?v=1702052643', 29.99, 1),
              ('Bundle', 'Description for Bundle', 'https://assets.target.com.au/transform/ccb51727-3c6d-4345-b25f-e23063e00890/67205455-IMG-000?io=transform%3Afit%2Cwidth%3A1400%2Cheight%3A1600&quality=90&output=webp', 49.99, 1 ),
              ('Sleeves', 'Description for Sleeves', 'https://m.media-amazon.com/images/I/81wEIMyfB5L.jpg', 9.99, 1),
              ('Figure', 'Description for Figure', 'https://www.picclickimg.com/v6EAAOSw26VjidGs/X-Men-Marvel-Square-Calendar-AAVV.webp', 19.99, 1),
              ('Poster', 'Description for Poster', 'https://m.media-amazon.com/images/I/91HkfdDH0OL._AC_UF1000,1000_QL80_.jpg', 14.99, 2),
              ('Mat', 'Description for Mat', 'https://m.media-amazon.com/images/I/91RDcM4iJ+L._AC_UF1000,1000_QL80_.jpg', 24.99, 2),
              ('Artbook', 'Description for Artbook', 'https://m.media-amazon.com/images/I/71-Wr+4eYAL._SL1000_.jpg', 39.99, 2),
              ('Dice', 'Description for Dice', 'https://m.media-amazon.com/images/I/71xIceTkPSL._AC_SL1500_.jpg', 4.99, 2);
        `);

    const email = 'develhope@example.com';
    const password = 'develhope';

    await db.none('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
};

setupDb();

export { db, setupDb };
