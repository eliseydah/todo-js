# To-do list

This project is a **Todo List** application that includes both frontend and backend parts. 

- **Frontend:** Built using **Vue** framework.
- **Backend:** Uses **Express.js** to handle API requests, including adding, deleting, and retrieving tasks.

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

### Setup backend 
1. Clone the repository:
```bash 
git clone https://github.com/eliseydah/todo-express.git
```
2. Make sure **Node.js** is installed. Then, install backend dependencies:

`npm install`

3. Run the Express server:
`npm start` 


### Frontend Setup

1. Clone the repository:
```bash 
git clone https://github.com/eliseydah/vue-todo.git
```

2. Go to the directory of the project: 
```bash
cd vue-todo
```

3. Run `npm install` to install frontend dependencies

4. Run `npm run dev` to start the frontend development environment.



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

## Technologies Used
- Frontend: Vue.js 
- Backend: Node.js, Express.js

