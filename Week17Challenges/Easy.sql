DROP DATABASE IF EXISTS Books;
CREATE DATABASE Books;
USE Books;

CREATE TABLE Books (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255), 
    publish_date year, 
    author_firstname VARCHAR(255),
    author_lastname VARCHAR(255)
);
INSERT INTO Books (title, publish_date, author_firstname, author_lastname)
VALUES ('A Tale of Two Cities', 1859, 'Charles', 'Dickens'), ('The Da Vinci Code', 2003, 'Dan', 'Brown'), ('The Catcher in the Rye', 1951, 'J.D', 'Salinger'), ('Goodnight Moon', 1947, 'Margaret', 'Wise'), ('Cell', 2006, 'Stephen', 'King');
DELETE FROM Books ORDER BY publish_date ASC LIMIT 1;
SELECT COUNT(1) FROM Books;
SELECT * FROM Books;
DROP TABLE Books;



