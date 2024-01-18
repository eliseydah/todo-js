let todoLine = document.querySelector('.todo-form');
let todoMessage = document.querySelector('#todo-template').content;
let container = document.querySelector('.cell-content');
let newMessageTemplate = todoMessage.querySelector('.todo-cell');
let newTodoText = todoLine.querySelector('.todo-form-input');

todoLine.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let lineMessage = newTodoText.value;
    let message = newMessageTemplate.cloneNode(true);
    // Element is created
    console.log(message);
    let messageContent = message.querySelector('p');
    messageContent.textContent = lineMessage;
    let buttonDelete = message.querySelector('.todo-delete-button');
    buttonDelete.addEventListener('click', function (evt) {
        evt.preventDefault()
        message.remove();

    })


    container.appendChild(message);
    let checkThrough = message.querySelector('.todo-checkbox')
    let lineThrough = message.querySelector('.todo-text');
    checkThrough.addEventListener('change', function (evt) {
        evt.preventDefault()
        if (checkThrough.checked === true) {
            lineThrough.classList.add('line-through');
        } else {
            lineThrough.classList.remove('line-through');
        }


    })
    newTodoText.value = '';
});



console.log('hhhh')