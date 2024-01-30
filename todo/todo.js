let todoLine = document.querySelector('.todo-form');
let todoMessage = document.querySelector('#todo-template').content;
let container = document.querySelector('.cell-content');
let newMessageTemplate = todoMessage.querySelector('.todo-cell');
let newTodoText = todoLine.querySelector('.todo-form-input');

function refreshCompletedCounter() {
    let completedCounterArray = document.querySelectorAll('div.line-through');
    let completedCounter = completedCounterArray.length;
    document.getElementById('clearElementCounter').textContent = completedCounter;
    if (completedCounter === 0) {
        clearCompletedButton.classList.add('invisible-button')
    } else {
        clearCompletedButton.classList.remove('invisible-button')
    }
}

function refreshAllCounter() {
    let counterArray = document.querySelectorAll('.todo-cell:not(div.line-through)')
    let counter = counterArray.length;
    document.getElementById('elementCounter').textContent = counter;

}
function allVisible() {
    let allVision = document.querySelectorAll('.hidden');
    for (let i = 0; i < allVision.length; i++) {
        let visionElement = allVision[i];
        visionElement.classList.remove('hidden');
    }

}
function invisible(elementName) {
    for (let i = 0; i < elementName.length; i++) {
        let oneComplete = elementName[i];
        oneComplete.classList.add('hidden');
    }

}

todoLine.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let lineMessage = newTodoText.value;
    let message = newMessageTemplate.cloneNode(true);
    // Element is created
    console.log(message);
    let messageContent = message.querySelector('p');
    messageContent.textContent = lineMessage;

    let currentTime = new Date().toLocaleString();

    message.setAttribute('data-creation-time', currentTime);

    let buttonDelete = message.querySelector('.todo-delete-button');
    buttonDelete.addEventListener('click', function (evt) {
        evt.preventDefault()
        message.remove();
        refreshCompletedCounter();
        refreshAllCounter();

        let dataTime = message.getAttribute('data-creation-time')

        console.log('Время создания элемента', dataTime);
    })

    container.appendChild(message);
    refreshAllCounter();


    let checkThrough = message.querySelector('.todo-checkbox')
    let lineThrough = message.querySelector('.todo-text');
    checkThrough.addEventListener('change', function (evt) {
        evt.preventDefault()
        if (checkThrough.checked === true) {
            lineThrough.classList.add('line-through');
            message.classList.add('line-through')

            refreshAllCounter();
            refreshCompletedCounter();

        } else {
            lineThrough.classList.remove('line-through');
            message.classList.remove('line-through');

            refreshAllCounter();
            refreshCompletedCounter();


        }
    })

    newTodoText.value = '';
});

let activeButton = document.querySelector('.active-button');
activeButton.addEventListener('change', function (evt) {
    evt.preventDefault();
    allVisible();
    let completedArray = document.querySelectorAll('.line-through');
    invisible(completedArray);

})

let completedButton = document.querySelector('.completed-button');
completedButton.addEventListener('change', function (evt) {
    evt.preventDefault()
    allVisible();
    let notCompletedArray = document.querySelectorAll('.todo-cell:not(.line-through)');
    invisible(notCompletedArray);
})

let allButton = document.querySelector('.all-button');
allButton.addEventListener('change', function (evt) {
    evt.preventDefault()
    allVisible();

})
let clearCompletedButton = document.querySelector('.clear-completed-button');
clearCompletedButton.addEventListener('click', function (evt) {
    evt.preventDefault()

    let clearCompletedArray = document.querySelectorAll('.line-through');
    for (let i = 0; i < clearCompletedArray.length; i++) {
        let clearCompletedElement = clearCompletedArray[i];
        clearCompletedElement.remove();
        refreshCompletedCounter();
    }
})

refreshCompletedCounter()

console.log('hhhh')