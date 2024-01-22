let todoLine = document.querySelector('.todo-form');
let todoMessage = document.querySelector('#todo-template').content;
let container = document.querySelector('.cell-content');
let newMessageTemplate = todoMessage.querySelector('.todo-cell');
let newTodoText = todoLine.querySelector('.todo-form-input');
let counter = 0;
let clearCounter = 0;

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
        clearCounter--;
        document.getElementById('clearElementCounter').textContent = clearCounter;
        counter--;
        document.getElementById('elementCounter').textContent = counter;

    })

    container.appendChild(message);
    counter++;
    document.getElementById('elementCounter').textContent = counter;

    let checkThrough = message.querySelector('.todo-checkbox')
    let lineThrough = message.querySelector('.todo-text');
    checkThrough.addEventListener('change', function (evt) {
        evt.preventDefault()
        if (checkThrough.checked === true) {
            lineThrough.classList.add('line-through');
            message.classList.add('line-through')
            counter--;
            document.getElementById('elementCounter').textContent = counter;
            clearCounter++;
            document.getElementById('clearElementCounter').textContent = clearCounter;
        } else {
            lineThrough.classList.remove('line-through');
            message.classList.remove('line-through');
            counter++;
            document.getElementById('elementCounter').textContent = counter;
            clearCounter--;
            document.getElementById('clearElementCounter').textContent = clearCounter;
        }
    })

    newTodoText.value = '';
});

let activeButton = document.querySelector('.active-button');
activeButton.addEventListener('change', function (evt) {
    evt.preventDefault();
    let allVision = document.querySelectorAll('.hidden');
    for (let i = 0; i < allVision.length; i++) {
        let visionElement = allVision[i];
        visionElement.classList.remove('hidden');
    }
    let completedArray = document.querySelectorAll('.line-through');
    for (let i = 0; i < completedArray.length; i++) {
        let oneComplete = completedArray[i];
        oneComplete.classList.add('hidden');
    }

})

let completedButton = document.querySelector('.completed-button');
completedButton.addEventListener('change', function (evt) {
    evt.preventDefault()
    let allVision = document.querySelectorAll('.hidden');
    for (let i = 0; i < allVision.length; i++) {
        let visionElement = allVision[i];
        visionElement.classList.remove('hidden');
    }
    let notCompletedArray = document.querySelectorAll('.todo-cell:not(.line-through)');
    for (let i = 0; i < notCompletedArray.length; i++) {
        let oneNotCompleted = notCompletedArray[i];
        oneNotCompleted.classList.add('hidden');
    }
})

let allButton = document.querySelector('.all-button');
allButton.addEventListener('change', function (evt) {
    evt.preventDefault()
    let clear = document.querySelectorAll('.hidden');
    for (let i = 0; i < clear.length; i++) {
        let clearElement = clear[i];
        clearElement.classList.remove('hidden');
    }

})


console.log('hhhh')