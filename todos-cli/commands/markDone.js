import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todos-cli" });

export default function markDone(options) {
    let todoList = conf.get("todo-list");

    if(todoList) {
        //loop over the todo list tasks
        todoList = todoList.map((task, index) => {
            //check if the user specified the tasks to mark as done
            if (options.task) {
                //check if this task is one of the tasks the user specified
                if (options.task.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                    task.done = true;
                }
            } else {
                //if the user didn't specify tasks, mark all tasks as done
                task.done = true;
            }
            return task;
        });
        //set the new todo-list
        conf.set("todo-list", todoList);
    }
    //show the user a message
    console.log(chalk.green.bold("Tasks have been marked as done successfully"));
}