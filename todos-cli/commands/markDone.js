import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todo-cli" });

export default function markDone({ tasks }) {
    let todoList = conf.get("todo-list");

    if(todoList) {
        //loop over the todo list tasks
        todoList = todoList.map((task, index) => {
            //check if the user specified the tasks to mark as done
            if (tasks) {
                //check if this task is one of the tasks the user specified
                if (tasks.indexOf(index.toString()) !== -1) {
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