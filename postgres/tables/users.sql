BEGIN TRANSACTION;

CREATE TABLE users (
  id serial INTEGER NOT NULL,
  name varchar(100),
  email text UNIQUE NOT NULL,
  password varchar(100) NOT NULL,
  created TIMESTAMP NOT NULL,
);

COMMIT;
