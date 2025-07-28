# 📦 Real-Time Inventory Management System

A full-stack real-time inventory dashboard with secure role-based login for Admin and Staff, built using **React**, **Node.js**, and **PostgreSQL**.

## 🚀 Features

- ✅ Role-based authentication (Admin & Staff)
- ✅ Product dashboard with real-time updates
- ✅ Add, edit, delete products (Admin-only for delete)
- ✅ Frontend + backend form validation
- ✅ Clean modular folder structure
- ✅ Login-protected routes
- ✅ JWT authentication with token storage

---

## 🛠️ Tech Stack

| Frontend      | Backend     | Database   |
|---------------|-------------|------------|
| React + Router | Node.js + Express | PostgreSQL |
| Axios + Tailwind | JWT, Bcrypt | pgAdmin for GUI |
| Chart.js (optional) | CORS, Dotenv | Sequelize/Knex (optional) |

---

## 🧩 Folder Structure

project-root/
│

├── backend/

│ ├── server.js

│ ├── routes/

│ └── controllers/

│

├── frontend/

│ ├── public/

│ │ └── index.html

│ └── src/

│ ├── pages/

│ ├── components/

│ ├── services/

│ └── App.js

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup
cd backend
npm install
node server.js
Make sure you have a PostgreSQL DB and .env like:

PORT=5000
DB_URL=postgresql://user:password@localhost:5432/inventory_db
JWT_SECRET=your_secret_key

2️⃣ Frontend Setup
cd frontend
npm install
npm start
Runs on http://localhost:3000

🔐 Default Users (for testing)
Role	Username	Password
Admin  	admin	  admin123
Staff 	staff	  staff123

Or register new users using Thunder Client at POST /api/auth/register

📸 Screenshots
<img width="560" height="414" alt="image" src="https://github.com/user-attachments/assets/d39c7c35-433e-4453-8db6-6cc7fb8dabe7" />
<img width="944" height="437" alt="image" src="https://github.com/user-attachments/assets/3474c7fa-9820-48e0-8811-eda3809454bd" />
<img width="829" height="411" alt="image" src="https://github.com/user-attachments/assets/96d520ff-f8e0-44f3-a75a-c2dcd141d685" />


🧑‍💻 Author
Developed by RS AATHISHREE for Flipr Hackathon 2025 🚀
