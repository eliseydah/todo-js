
let newWish = document.querySelector('.create-element-form');
let wishTemplate = document.querySelector('#wish-template').content;
let container = document.querySelector('.container');
let newWishTemplate = wishTemplate.querySelector('.wish-container');
let title = newWish.querySelector('.title-input');
let link = newWish.querySelector('.link-input');
let description = newWish.querySelector('.description-input');
const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'))


let allForm = document.querySelector('.create-element-form');

let mainColor = document.querySelector('body');
let roseButton = document.querySelector('.rose')
let blueButton = document.querySelector('.blue')
let greenButton = document.querySelector('#green')
let beigeButton = document.querySelector('.beige')
let brownButton = document.querySelector('.brown')
let yellowButton = document.querySelector('.yellow')


roseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('rose')
})
blueButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('blue')
})
beigeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('beige')
})
brownButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('brown')
})
yellowButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('yellow');
})
greenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    changeColor('green')
})

function changeColor(buttonClass) {
    mainColor.className = " ";
    mainColor.classList.add(buttonClass);

}
// let addWishesButton = document.querySelector('.add-wishes')
// addWishesButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     allForm.classList.remove('unvisible');

// })

// let createWishButton = document.querySelector('.send-button');
// createWishButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     allForm.classList.add('unvisible');
// })

// let deleteButton = document.querySelector('.delete-button');
// deleteButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     allForm.classList.add('unvisible');
// })

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

function refreshArray(hiddenArray, normalArray) {
    for (let i = 0; i < hiddenArray.length; i++) {
        let oneHiddenElement = hiddenArray[i];
        oneHiddenElement.classList.add('unvisible')
    }
    for (let i = 0; i < normalArray.length; i++) {
        let normalElement = normalArray[i];
        normalElement.classList.remove('unvisible');
    }
}


let filterButton = document.querySelector('.filter-choice');
filterButton.addEventListener('change', function (evt) {
    evt.preventDefault();
    let category1Array = document.querySelectorAll('.cat-1');
    let category2Array = document.querySelectorAll('.cat-2');
    let category3Array = document.querySelectorAll('.cat-3');
    let priceSelect = document.getElementById('filter-price-select');
    let priceChoice = priceSelect.value;
    switch (priceChoice) {
        case 'filter':
            let allVisibleArray = document.querySelectorAll('.wish-container')
            refreshArray([], allVisibleArray);
            break;
        case 'filter-price-1':
            let newCat1Array = document.querySelectorAll('.wish-container:not(.cat-1)');
            let cat1Array = document.querySelectorAll('.cat-1');
            console.log(newCat1Array)
            refreshArray(newCat1Array, cat1Array);
            break;
        case 'filter-price-2':
            let newCat2Array = document.querySelectorAll('.wish-container:not(.cat-2)');
            console.log(newCat2Array)
            let Cat2Array = document.querySelectorAll('.cat-2')
            refreshArray(newCat2Array, category2Array);
            break;
        case 'filter-price-3':
            let newCat3Array = document.querySelectorAll('.wish-container:not(.cat-3)');
            console.log(newCat3Array)
            let cat3Array = document.querySelectorAll('.cat-3');
            refreshArray(newCat3Array, cat3Array);
        // default:
        // let allVisibleArray = document.querySelectorAll('.wish-container')
        // refreshArray([], allVisibleArray);
    }
})
// refactor: switch
//     if (priceChoice === 'filter') {
//         let allVisibleArray = document.querySelectorAll('.wish-container')
//         // refactor: refreshArray([], allVisibleArray)
//         for (let i = 0; i < allVisibleArray.length; i++) {
//             allVisibleArray[i].classList.remove('unvisible');
//         }
//     }
//     if (priceChoice === 'filter-price-1') {
//         let newCat1Array = document.querySelectorAll('.wish-container:not(.cat-1)');
//         let cat1Array = document.querySelectorAll('.cat-1');
//         console.log(newCat1Array)
//         refreshArray(newCat1Array, cat1Array);


//     }
//     if (priceChoice === 'filter-price-2') {
//         let newCat2Array = document.querySelectorAll('.wish-container:not(.cat-2)');
//         console.log(newCat2Array)
//         let Cat2Array = document.querySelectorAll('.cat-2')
//         refreshArray(newCat2Array, category2Array);

//     }
//     if (priceChoice === 'filter-price-3') {
//         let newCat3Array = document.querySelectorAll('.wish-container:not(.cat-3)');
//         console.log(newCat3Array)
//         let cat3Array = document.querySelectorAll('.cat-3');
//         refreshArray(newCat3Array, cat3Array);

//     }
// })

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
    exampleModal.hide()
})