let todoLine = document.querySelector('.todo-form');
let todoMessage = document.querySelector('#todo-template').content;
let container = document.querySelector('.main-content');
let newMessageTemplate = todoMessage.querySelector('.todo-cell');
let newTodoLine = todoLine.querySelector('.todo-form-input');

todoLine.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let lineMessage = newTodoLine.value;
})

console.log('hhhh')