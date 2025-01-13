# To-do list

A simple application for managing task lists. Allows you to add, delete and mark tasks as completed.

## Description 
    
  This application includes: 

- Creation to-do items
- Marking tasks as completed
- Deleting to-do items
- List of completed tasks
- List of active tasks
- List of all tasks
- A counter for completed tasks 
- A counter for active tasks

### Setup 
1. Clone the repository:
```bash 
git clone https://github.com/eliseydah/todo-js.git
```
2. Go to the directory of the project: 
```bash
cd vue-todo
```
3. Open the file `App.vue`  

4. Run `npm install` to install dependencies

5. Run `npm run dev` to start the development environment.

### Usage
After opening that page in the browser you can: 
- Add a new task by typing in the input field and pressing the "Enter" button.
- Mark a task as completed by clicking on the circle icon.
- Remove a task by clicking the cross icon next to it.
- View the list of completed tasks by clicking the `Completed` button.
- View the list of tasks you still need to do by clicking the `Active` button.
- Clicking the `All` button will show you all the tasks in your to-do list.
- The counter on the left side shows how many tasks need to be done. The counter value changes when you add new tasks (it increases) and when you mark a task as completed or delete it (the counter decreases).
- The counter on the right side shows how many tasks have already been completed. The counter value changes when you mark a task as completed (it increases) and when you delete completed tasks (it decreases).

## File Structure 
- App.vue — the main web page component with JavaScript, HTML, and styles.
- Item.vue - a component for every item in todo-array. 
- Counter.vue — a component for the counter.
- CompletedCounter.vue — a component for completed tasks.
- RadioButton.vue — a component with radio buttons.



