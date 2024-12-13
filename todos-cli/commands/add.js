import Conf from "conf";
import chalk from "chalk";

const conf = new Conf({ projectName: "todos-cli" });

export default function add(task) {
  //get the current todo list
  let todoList = conf.get("todo-list");

  if (!todoList) {
    todoList = [];
  }

  //push the new task to the todos-list
  todoList.push({ text: task, done: false });

  //set todos-lsit in conf
  conf.set("todo-list", todoList);
  
  //display message to user
  console.log(chalk.greenBright("Task has been added successfully"));
}
