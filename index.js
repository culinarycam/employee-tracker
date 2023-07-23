const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

let db;

const handleAction = ({ action }) => {
    console.log(`ACTION ${action}`);
    switch(action) {
        case 'View All Employees': {
          db.query('SELECT * FROM employees', (err, employees) => {
            console.table(employees);
            init();
          });
            break;
        }
        case 'View All Departments': {
          db.query('SELECT * FROM departments', (err, departments) => {
            console.table(departments);
            init();
          });
          break;
        }
        case 'View All Roles': {
            db.query('SELECT * FROM roles', (err, roles) => {
                console.table(roles);
                init();
            });
            break;
        }
        default: {
            process.exit();
        }
    }
};

const init = () => {
    prompt({
        message: 'What would you like to do?',
        type: 'rawlist',
        name: 'action',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
        ]
    }).then(handleAction);
};

db = mysql.createConnection({
    host: '3001',
    user: 'root',
    database: 'employee_db',
}, init());