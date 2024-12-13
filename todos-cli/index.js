#! /usr/bin/env node

import { program } from 'commander';
import list from './commands/list.js';
import add from './commands/add.js';

program
    .command("list")
    .description("List all the TODO tasks")
    .action(list)

program
    .command("add <task>")
    .description("Add a new task to the TODO list")
    .action(add)    

program
    .command("mark-done")
    .description("Mark a task as done")
    .option("-t, --task <tasks...>", "The task number to mark as done. if not specified, all tasks will be marked as done")
    .action(markDone)



program.parse();