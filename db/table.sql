CREATE TABLE property (
property_id SERIAL PRIMARY KEY,
property_name VARCHAR(64),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip INTEGER
);

INSERT INTO property (property_name, address, city, state, zip)
VALUES 
('small house', '1111 E small street', 'smallville', 'AZ', 85027),
('medium house', '1212 E medium street', 'mediumville', 'AZ', 85029),
('large house', '2121 E large street', 'largeville', 'AZ', 85022);

ALTER TABLE property
ADD image VARCHAR(200);

ALTER TABLE property
ADD monthly_mortgage DECIMAL;

ALTER TABLE property
ADD desired_rent DECIMAL;
