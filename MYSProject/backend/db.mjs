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
              ('Game', 'Description for Game', 'https://franklinheights.org/wp-content/uploads/2019/09/board-games-png-4-transparent.png', 29.99, 1),
              ('Bundle', 'Description for Bundle', 'https://static.vecteezy.com/system/resources/previews/021/013/967/original/chess-board-game-isolated-3d-render-free-png.png', 49.99, 1 ),
              ('Sleeves', 'Description for Sleeves', 'https://ultrapro.com/cdn/shop/products/15912_GradedCardSlv_PSA_Flat_800x.png?v=1669162805', 9.99, 1),
              ('Figure', 'Description for Figure', 'https://iconspng.com/uploads/superman-figure.png', 19.99, 1),
              ('Poster', 'Description for Poster', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Tos-poster.png/1382px-Tos-poster.png', 14.99, 2),
              ('Mat', 'Description for Mat', 'https://www.floormatshop.com/Custom-Logo-Floor-Matting/Custom-Shape/Custom-Shape-Logo-Mat-733-LG.png', 24.99, 2),
              ('Artbook', 'Description for Artbook', 'https://www.inkhand.it/wp-content/uploads/2019/09/Artbook-Dario-Bellinato-Inkhand-front-2019.jpg', 39.99, 2),
              ('Dice', 'Description for Dice', 'https://static.vecteezy.com/system/resources/previews/020/575/874/original/3d-icon-illustration-floating-dice-png.png', 4.99, 2);
        `);


    const email = 'develhope@example.com';
    const password = 'develhope';

    await db.none('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
};

setupDb();

export { db }