let newForm = document.querySelector('.message');
let messageTemplate = document.querySelector('#message-template').content;
let container = document.querySelector('.chat-content')
let newMessageTemplate = messageTemplate.querySelector('.chat-message');
let newTextForm = newForm.querySelector('.message-input');


function authorChoice(message) {
    let selectAuthor = document.getElementById('author-select');
    let choice = selectAuthor.value;
    console.log(choice);
    if (choice === 'Artem') {
        message.classList.add('screen-side');
        // document.getElementById('clearElementCounter').textContent = completedCounter;
    }
}

newForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let textMessage = newTextForm.value;
    let message = newMessageTemplate.cloneNode(true);

    console.log(message);

    let messageContent = message.querySelector('p');
    messageContent.textContent = textMessage;
    authorChoice(message);
    let buttonDelete = message.querySelector('.delete-button');
    buttonDelete.addEventListener('click', function (evt) {
        evt.preventDefault();
        message.remove();
    })
    container.appendChild(message);
    newTextForm.value = '';
})