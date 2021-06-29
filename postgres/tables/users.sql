BEGIN TRANSACTION;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password varchar(200) NOT NULL,
  created TIMESTAMP NOT NULL
);

COMMIT;
