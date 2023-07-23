const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

let db;

const getAll = (tableName) => {
    db.query('SELECT * FROM ??', tableName, (err, results) => {
        if (err) {
            return console.error(err)
        }
        console.table(results);
        init();
    });
    };

const insertEmployee = (data) => {
    db.query('INSERT INTO employees SET ?', data, (err, result) => {
        console.log('Add Employee');
        init();
    });
    };

const handleAction = ({ action }) => {
    console.log(`ACTION ${action}`);
    switch(action) {
        case 'View All Employees': {
      getAll('employees');
            break;
        }
        case 'View All Departments': {
      getAll('departments');
          break;
        }
        case 'View All Roles': {
          getAll('roles');
            break;
        }
        case 'Add Employee': {
            prompt([
                {
                    message: 'Enter first name',
                    name: 'first_name',
                },
                {
                    message: 'Enter last name',
                    name: 'last_name',
                },
            ]).then(insertEmployee);
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
            'Add Employee',
            'Exit',
        ]
    }).then(handleAction);
};

db = mysql.createConnection({
    host: '3001',
    user: 'root',
    database: 'employee_db',
}, init());