
---

### ✅ `backend/README.md`

```markdown
# 📚 Minimal Library Management System – Backend

This is the **server-side application** for the Minimal Library Management System. Built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**, this RESTful API supports all core functionality including managing books and borrowing operations.

## 🌐 Live API

🔗 [Visit Backend](https://your-backend-deployment-link.com)

---

## ⚙️ Features

- 📘 Book CRUD (Create, Read, Update, Delete)
- 📥 Borrow book with quantity and due date
- 🔄 Automatically updates availability based on copy count
- 📊 Borrow summary API for frontend aggregation
- 🔐 Modular MVC structure for scalability
- ❌ Error handling with meaningful messages
- 📄 Pagination support for book listing
- 🛡️ (Optional) Middleware-ready authentication support

---

## 📁 API Endpoints

### 📘 Book Routes

| Method | Endpoint        | Description                    |
|--------|------------------|--------------------------------|
| GET    | `/books`         | Get all books                  |
| POST   | `/create-book`   | Add new book                   |
| GET    | `/books/:id`     | Get single book details        |
| PUT    | `/edit-book/:id` | Update book info               |
| DELETE | `/books/:id`     | Delete a book                  |

### 📥 Borrow Routes

| Method | Endpoint              | Description                            |
|--------|------------------------|----------------------------------------|
| POST   | `/borrow/:id`     | Borrow a book  |
| GET    | `/borrow-summary` | Borrow summary |

---

## 🧱 Tech Stack

| Layer     | Technology      |
|-----------|-----------------|
| Runtime   | Node.js         |
| Framework | Express.js      |
| Database  | MongoDB + Mongoose |
| CORS      | Enabled         |
| JSON API  | REST            |

---

---

## 🔐 Environment Variables

Create a `.env` file and add:


---

## 🛠️ Available Scripts

```bash
# Install dependencies
npm install

# Start the server
npm run dev



