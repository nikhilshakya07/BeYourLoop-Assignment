# BeYourLoop Backend – Authentication API

This is the backend server built with Node.js, Express.js, and MongoDB for the BeYourLoop full-stack assignment.

## 🔧 Tech Stack
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT (authentication)
- bcrypt (password hashing)
- dotenv (environment variables)

## 🧩 Features
- Register new user
- Login user
- Protected route to get current user info
- JWT-based authentication
- Password hashing with bcrypt
- Middleware for auth protection

## 📦 Installation

```bash
cd backend
npm install
cp .env.example .env
# then fill the variables
npm run dev
```

## 🔗 API Endpoints

| Method | Route                | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register user                |
| POST   | `/api/auth/login`    | Login user                   |
| GET    | `/api/auth/me`       | Get current user (Protected) |

## 📁 Project Structure
```
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── .env.example
├── server.js
```
