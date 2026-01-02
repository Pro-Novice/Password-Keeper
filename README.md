🔐 Password Keeper

A beautiful and secure Password Manager Web Application built using HTML, CSS, Bootstrap, JavaScript, and Axios, with data stored persistently using CrudCrud API.
This application allows users to:

Add passwords

View saved passwords

Edit existing passwords

Delete passwords

Search passwords dynamically

Persist data even after refresh or reopening the app

Everything is handled seamlessly with a modern UI and smooth user experience.

🚀 Features
✅ Core Functionality

Add passwords with a title and secure key

View all saved passwords in a neat list

Edit any existing entry

Delete passwords anytime

Real-time password count indicator

🔍 Smart Search

Search passwords by title

Instant filtering as you type

Press Enter or use Search button

Clearing search restores full list

🔁 Persistent Storage

Passwords remain:

Even after refreshing

Even after closing the browser

Even across devices

Thanks to CrudCrud REST API integration.

🛠️ Tech Stack

HTML5

CSS3

Bootstrap 5

JavaScript (Vanilla)

Axios

CrudCrud API

📸 Screenshots
Password Keeper UI
(Add your screenshot here)
⚙️ Installation & Setup

1️⃣ Clone the repo

git clone https://github.com/your-username/password-keeper.git


2️⃣ Open the project folder

cd password-keeper


3️⃣ Open index.html in your browser
(or use Live Server in VS Code)

4️⃣ Replace CRUDCRUD API URL in script.js

const API = "https://crudcrud.com/api/YOUR_KEY/passwordKeeper";

🎯 How It Works

User submits a password entry

App sends POST request to CrudCrud

Data gets stored remotely

On page load, app fetches data using GET

UI updates dynamically

Edit/Delete operations update backend + UI

Search filters list live

🧑‍💻 Future Enhancements (optional to list)

🔒 Encrypt stored passwords

👁 Show / Hide password toggle

📋 Copy to Clipboard button

🧾 Export / Import passwords

👤 User authentication support

❤️ Credits

Developed with passion using vanilla JavaScript and modern UI concepts.
