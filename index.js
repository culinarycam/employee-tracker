const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

let db;

const getAll = (tableName) => {
    db.query('SELECT * FROM ?', tableName, (err, results) => {
        console.table(results);
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