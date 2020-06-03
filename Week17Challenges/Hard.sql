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
ALTER TABLE Movies ADD COLUMN director_first VARCHAR(255);
ALTER TABLE Movies ADD COLUMN director_last VARCHAR(255);
UPDATE Movies 
	SET director_first = 'Tyler', director_last = 'Spindel'
	WHERE title = 'The Wrong Missy';
UPDATE Movies 
	SET director_first = 'Tony', director_last = 'Servon'
	WHERE title = 'Scoob!';
UPDATE Movies 
	SET director_first = 'Todd', director_last = 'Philips'
	WHERE title = 'Joker';
UPDATE Movies 
	SET director_first = 'Josh', director_last = 'Trank'
	WHERE title = 'Capon';
UPDATE Movies 
	SET director_first = 'Sam', director_last = 'Hargrave'
	WHERE title = 'Extraction';
UPDATE Movies 
	SET director_first = 'Quentin', director_last = 'Tarantino'
	WHERE title = 'Once Upon a Time... in Hollywood';
UPDATE Movies 
	SET director_first = 'Boog', director_last = 'Ho'
	WHERE title = 'Parasite';
UPDATE Movies 
	SET director_first = 'Barbara', director_last = 'Bialowas'
	WHERE title = '365 Days';
UPDATE Movies 
	SET director_first = 'Guy', director_last = 'Ritchie'
	WHERE title = 'The Gentlemen';
UPDATE Movies 
	SET director_first = 'Bong', director_last = 'Ho'
	WHERE title = 'Snowpiercer';

ALTER TABLE Movies ADD COLUMN fullname VARCHAR(50);
UPDATE Movies SET fullname = CONCAT(director_first, ' ', director_last);
SELECT * FROM Movies ORDER BY fullname;
DELETE FROM Movies WHERE REGEXP_LIKE(director_last, '[r-z]$');
SELECT * FROM Movies ORDER BY fullname LIMIT 3;
SELECT * FROM Movies;
DROP TABLE Movies;