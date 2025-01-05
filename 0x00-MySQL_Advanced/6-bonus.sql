-- SQL script that creates a stored procedure AddBonus that
-- adds a new correction for a student.

DELIMITER //

CREATE PROCEDURE AddBonus (
    IN user_id INT,
    IN project_name VARCHAR(255),
    IN core INT
)
BEGIN
    INSERT INTO projects(name)
    SELECT project_name FROM DUAL
    WHERE NOT EXISTS(SELECT * FROM projects WHERE name = project_name LIMIT 1);

    INSERT INTO corrections(user_id, project_id, score)
    VALUES (
        user_id,
        (SELECT id FROM projects WHERE name = project_name LIMIT 1),
        core
    );
END //

DELIMITER ;
