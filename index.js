const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

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

const db = mysql.createConnection({
    host: '3001',
    user: 'root',
    database: 'employee_db',
}, init());

const handleAction = ({ action }) => {
    console.log(`ACTION ${action}`);
}