let newForm = document.querySelector('.message');
let messageTemplate = document.querySelector('#message-template').content;
let container = document.querySelector('.chat-content')
let newMessageTemplate = messageTemplate.querySelector('.chat-message');
let newTextForm = newForm.querySelector('.message-input');

function addZero(num) {
    return num < 10 ? "0" + num : num;
}



function authorChoice(message) {
    let selectAuthor = document.getElementById('author-select');
    let choice = selectAuthor.value;
    console.log(choice);
    if (choice === 'Artem') {
        message.classList.add('screen-side');
        message.querySelector('.author-name').textContent = choice;
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
    function messageTime() {
        let currentTime = new Date()
        let hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        let time = addZero(hours) + ":" + addZero(minutes);
        message.querySelector('.time').textContent = time;
    }
    messageTime();
    let buttonDelete = message.querySelector('.delete-button');
    buttonDelete.addEventListener('click', function (evt) {
        evt.preventDefault();
        message.remove();
    })
    container.appendChild(message);
    newTextForm.value = '';
})