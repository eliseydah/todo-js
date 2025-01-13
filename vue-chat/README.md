# Chat Page 
A simple application that simulates chat functionality, showcasing only the frontend without any backend integration.

## Description 
This application includes:

- Creating messages.
- Deleting messages.
- Choosing a user name (2 options).
- Sending and displaying messages with the chosen user name and the time of sending.

### Setup 
1. Clone the repository:
```bash 
git clone  https://github.com/eliseydah/todo-js.git
```
2. Go to the directory of the project: 
```bash
cd vue-chat
```
3. Run `npm install` to install dependencies

4. Run `npm run dev` to start the development environment.

## Usage 
After opening in a browser, you can:

- Choose the name of the sender.
- Create a new message by typing in the input field and pressing the "Enter" key or clicking the Send button.
- See the new message displayed in the chat area of the web page, showing the name of the author and the time it was sent.
- If you change the name of the author, the message will be displayed on the other side of the chat area.
- Delete a message by clicking the red cross on the right side of the message.

## File Structure 
- App.vue — The main file.
- MainForm.vue — A Vue component with a form and author name layout.
- Message.vue — A Vue component for the message layout.
