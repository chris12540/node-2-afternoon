CREATE TABLE product (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(80),
    price INTEGER,
    image_url TEXT
);