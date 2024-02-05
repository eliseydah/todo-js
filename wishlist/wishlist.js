
let newWish = document.querySelector('.create-element-form');
let wishTemplate = document.querySelector('#wish-template').content;
let container = document.querySelector('.container');
let newWishTemplate = wishTemplate.querySelector('.wish-container');
let title = newWish.querySelector('.title-input');
let link = newWish.querySelector('.link-input');
let description = newWish.querySelector('.description-input');



let allForm = document.querySelector('.create-element-form');

let addWishesButton = document.querySelector('.add-wishes')
addWishesButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    allForm.classList.remove('unvisible');

})

// let createWishButton = document.querySelector('.send-button');
// createWishButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     allForm.classList.add('unvisible');
// })

let deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    allForm.classList.add('unvisible');
})

function categoryChoice(wishElement) {
    let selectCategory = document.getElementById('filter-select');
    let choice = selectCategory.value;
    console.log(choice);
    wishElement.querySelector('.wish-category').textContent = choice;
    if (choice === 'category-1') {
        wishElement.classList.add('cat-1')
    }
    if (choice === 'category-2') {
        wishElement.classList.add('cat-2')
    }
    if (choice === 'category-3') {
        wishElement.classList.add('cat-3')
    }

}

let filterButton = document.querySelector('.filter-choice');
filterButton.addEventListener('change', function (evt) {

})

newWish.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let textValue = title.value;
    let linkValue = link.value;
    let descriptionValue = description.value;
    let wishElement = newWishTemplate.cloneNode(true);

    let wishTextContent = wishElement.querySelector('.wish-name');
    wishTextContent.textContent = textValue;
    let linkContent = wishElement.querySelector('.wish-link');
    linkContent.textContent = linkValue;
    categoryChoice(wishElement);
    let descriptionContent = wishElement.querySelector('.wish-description');
    descriptionContent.textContent = descriptionValue;
    let wishDeleteButton = wishElement.querySelector('.wish-delete-button');
    wishDeleteButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        wishElement.remove();
    })


    container.appendChild(wishElement);
    title.value = '';
    link.value = '';
    description.value = '';
    allForm.classList.add('unvisible');
})