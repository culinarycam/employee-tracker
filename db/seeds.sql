USE employee_db;

--Departments
INSERT INTO departments (name)
VALUES ('Customer Service'), ('Marketing');
--Roles
INSERT INTO roles (title, salary)
VALUES ('Receptionist', 60000), ('Tele-Marketer', 50000);
--Employees
INSERT INTO employees (first_name, last_name)
VALUES ('Henry', 'Weaver'), ('Gary', 'Crocket');