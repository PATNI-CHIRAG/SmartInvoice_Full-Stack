# 🧾 SmartInvoice - Full Stack Invoice Management System

A modern full-stack invoice management system built using **Next.js (Frontend)** and **Django REST Framework (Backend)**.  
This application allows users to create, view, and manage invoices with a clean and responsive UI.

---

## 🚀 Live Demo
🔗 https://smart-invoice-full-stack-f9cm.vercel.app/

---

## 🎥 Video Demonstration
📹 [Watch Video](https://raw.githubusercontent.com/PATNI-CHIRAG/SmartInvoice/main/Video%20Project.mp4)

---

## 📁 GitHub Repository
🔗 https://github.com/PATNI-CHIRAG/SmartInvoice

---

## ✨ Features

- ✅ Create invoices with multiple items  
- ✅ View all invoices  
- ✅ View detailed invoice page  
- ✅ Delete invoices  
- ✅ Responsive design (Mobile + Desktop)  
- ✅ Modern UI with Tailwind CSS  

---

## 🛠 Tech Stack

### 🚀 Frontend
- Next.js 
- Tailwind CSS

### ⚙️ Backend
- Django
- Django REST Framework

### 🗄 Database
- PostgreSQL

### 🌐 Deployment 
- Vercel (Frontend)
- Render (Backend)

---

## 🧱 Project Structure

```bash
SmartInvoice/
│
├── backend/                  # Django Backend
│   ├── manage.py
│   ├── config/      
│   ├── invoices/
│
├── frontend/                 # Next.js Frontend
│   ├── app/
│   │   ├── create/
│   │   ├── invoices/
│   │   ├── components/
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── package.json
│
└── README.md
```

## 📡 API Integration

The frontend communicates with the backend using RESTful APIs built with Django REST Framework.

---

### 🔗 Base URL
http://127.0.0.1:8000/api/
---

### 📌 Endpoints

| Method | Endpoint | Description |
|-------|---------|------------|
| GET | `/invoices/` | Fetch all invoices |
| POST | `/invoices/` | Create a new invoice |
| GET | `/invoices/{id}/` | Fetch a single invoice |
| DELETE | `/invoices/{id}/` | Delete an invoice |

---


## ⚙️ Setup Instructions

🔹 Backend Setup (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

http://127.0.0.1:8000/
```

🔹 Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev

http://localhost:3000/
```
---

👨‍💻 Author

Chirag Patni
