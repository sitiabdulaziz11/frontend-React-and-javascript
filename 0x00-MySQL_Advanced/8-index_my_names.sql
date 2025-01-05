-- SQL script that creates an index idx_name_first on the table names and the first letter of name.

CREATE INDEX idx_name_first
ON names(name(1));
-- cat metal_bands.sql | mysql -uroot -p holberton