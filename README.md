# 📚 Minimal Library Management System – Backend

This is the **server-side application** for the Minimal Library Management System. Built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**, this RESTful API provides all core functionalities for managing books and borrowing operations.

---

## 🌐 Live API

🔗 [Access the Backend API](https://book-management-server-steel.vercel.app)

---

## ⚙️ Features

- 📘 Complete Book CRUD (Create, Read, Update, Delete) operations  
- 📥 Borrow books with quantity management and due dates  
- 🔄 Automatic update of book availability based on copy count  
- 📊 Borrow summary API for frontend data aggregation  
- 🔐 Modular MVC architecture for scalability and maintainability  
- ❌ Robust error handling with clear, meaningful messages  
- 📄 Pagination support for efficient book listing  


---

## 📁 API Endpoints

### 📘 Book Routes

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/books`          | Retrieve all books       |
| POST   | `/create-book`    | Add a new book           |
| GET    | `/books/:id`      | Get details of a book    |
| PUT    | `/edit-book/:id`  | Update book information  |
| DELETE | `/books/:id`      | Delete a book            |

### 📥 Borrow Routes

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| POST   | `/borrow/:id`      | Borrow a book          |
| GET    | `/borrow-summary`  | Get summary of borrows |

---

## 🧱 Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Runtime   | Node.js            |
| Framework | Express.js         |
| Database  | MongoDB + Mongoose |
| CORS      | Enabled            |
| API Type  | RESTful            |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following environment variables:


*(Replace placeholder values with your actual configuration.)*

---

## 🛠️ Available Scripts

```bash
# git clone
git clone https://github.com/Sahajewel/book-management-server.git

# Install dependencies
npm install

# Start the server in development mode (with nodemon)
npm run dev
