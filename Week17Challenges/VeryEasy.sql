DROP DATABASE IF EXISTS Cars;
CREATE DATABASE Cars;
USE Cars;

CREATE TABLE Cars (make VARCHAR(255), model VARCHAR(255), year INT, id INT AUTO_INCREMENT PRIMARY KEY);

INSERT INTO Cars(make, model, year)
VALUES("Honda", "Civic SI", 2020),
("Toyota", "Camry", 2019),
("Kia", "Optima", 2018);

INSERT INTO Cars(make, model, year)
VALUES("Nissan", "Altima", 2017),
("Hyundai", "Sonata", 2016);

SELECT * FROM Cars;
DROP TABLE Cars;