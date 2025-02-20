# Wishlist

A simple application for creating a list of wishes. It allows you to create a wish card, describe a wish, upload a picture, add a link, and delete the wish card.

This project is a **Wishlist** application that includes both frontend and backend parts. 
- **Frontend:** Built using **Vue** framework.
- **Backend:** Uses **Express.js** to handle API requests, including adding, deleting, and retrieving tasks.

## Description 
    
This application includes:

- Creation of wish cards.
- A modal form for creating wish cards.
- Deletion of wish cards.
- Design choice — you can choose a background picture you like the most.
- A filter for wishes `Filter` , which divides them into three categories.
- A button `Add Wishes` to open a modal window.
- A logo for this web page.
- Cards with wishes. 

### Setup backend 
1. Clone the repository:
```bash 
git clone https://github.com/eliseydah/todo-express.git
```
2. Make sure **Node.js** is installed. Then, install backend dependencies:

`npm install`

3. Run the Express server:
`npm start` 

### Setup Frontend 
1. Clone the repository:
```bash 
git clone https://github.com/eliseydah/todo-js.git
```
2. Go to the directory of the project: 
```bash
cd vue-wishlist
``` 

3.  Run npm install to install dependencies

4. Run npm run dev to start the development environment.

### Usage

After opening the page in the browser, you can:

- Click the button `Add Wishes` to open the modal form for the future wish card.
- Fill out the modal form and click the button `Create a wish card` to create a new wish card.
- Add a category for the wish card (the application includes three categories, which allow you to separate the cards by criteria such as price).
- Automatically fill in the form if you add a link and click the `For Fetch` button.
- Use the `Filter` dropdown to show all cards in one chosen category.
- Remove a wish card by clicking the cross icon.
- Click a color square in `Design Choice` to change the background picture.
- Click the button `Go Somewhere` to navigate to the webpage of the wish item. 

## File Structure 
- App.vue — main file.

