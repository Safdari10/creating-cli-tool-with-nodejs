import Conf from 'conf';
import chalk from 'chalk';

const conf = new Conf({ projectName: 'todos-cli' });

export default function list() {
    const todoList = conf.get('todo-list');

    if(todoList && todoList.length) {
        //user has tasks in todoList
        console.log(chalk.backgroundColorNames.bold("Tasks in green are done. Tasks in yellow are still not done."));

        todoList.forEach((task, index) => {
            if(task.done) {
                console.log(chalk.greenBright(`${index}. ${task.text}`));
            }else {
                console.log(chalk.yellowBright(`${index}. ${task.text}`));
            }
        })
    }else {
        //user doest not have tasks in todoList
        console.log(chalk.red.bold("You don't have any tasks in your TODO list"));
    }
}

