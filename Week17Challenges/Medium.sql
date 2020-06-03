DROP DATABASE IF EXISTS Movies;
CREATE DATABASE Movies;
USE Movies;

CREATE TABLE Movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    release_date year, 
    rating DECIMAL(2,1)
);
INSERT INTO Movies (title, release_date, rating)
VALUES ('The Wrong Missy', 2020, 5.7), ('Scoob!', 2020, 5.8), ('Joker', 2019, 8.5), ('Capon', 2020, 4.8), ('Extraction', 2020, 6.8), ('Once Upon a Time... in Hollywood', 2019, 7.7), ('Parasite', 2019, 8.6), ('365 Days', 2020, 3.6), ('The Gentlemen', 2019, 7.9), ('Snowpiercer', 2019, 7.9);
SELECT * FROM Movies 
WHERE title LIKE '%s%' ORDER BY release_date ASC;
DROP TABLE Movies;
