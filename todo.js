let todoLine = document.querySelector('.todo-form');
let todoMessage = document.querySelector('#todo-template').content;
let container = document.querySelector('.main-content');
let newMessageTemplate = todoMessage.querySelector('.todo-cell');
let newTodoText = todoLine.querySelector('.todo-form-input');

todoLine.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let lineMessage = newTodoText.value;
    let message = newMessageTemplate.cloneNode(true);
    console.log(message);
    let messageContent = message.querySelector('p');
    messageContent.textContent = lineMessage;
    let buttonDelete = message.querySelector('.todo-delete-button');
    buttonDelete.addEventListener('click', function (evt) {
        evt.preventDefault()
        message.remove();

    })
    container.appendChild(message);
    newTodoText.value = '';
});

console.log('hhhh')