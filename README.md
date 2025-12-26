# Express MVC Server

This is a simple backend server built using **Node.js** and **Express.js**, following a basic **MVC (Model–View–Controller)** architecture.  
The project is designed to demonstrate backend fundamentals such as routing, controllers, JSON handling, and HTTP methods.

---

## 🎯 Project Objectives
- Understand Express.js basics
- Practice MVC folder structure
- Handle GET and POST requests
- Return JSON responses
- Create dynamic API endpoints
- Handle unknown routes

---

## 🛠 Technologies Used
- Node.js
- Express.js

---

## 📁 Project Structure

express-mvc-server/
│
├── server.js
├── routes/
│ └── mainRoutes.js
├── controllers/
│ └── mainController.js
├── package.json
├── package-lock.json
└── node_modules/

Start the server

node server.js


The server will run on:

http://localhost:4000/api


📥 POST Request Example

Endpoint

POST /api/echo


Request Body (JSON)

{
  "message": "Hello Express"
}


Response

{
  "success": true,
  "received": "Hello Express"
}

⚠️ Notes

This is a backend-only project (no frontend UI).

All responses are returned in JSON format.

Unknown routes return a 404 JSON response.

The project is intended for learning purposes.
