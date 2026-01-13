# Dynamic UI Dashboard

A full-stack dynamic UI application that allows users to customize a website’s **Header, Navbar, and Footer** in real time.

Changes are instantly reflected in the live preview and persisted using a backend API and localStorage.  
Header images are uploaded using **Cloudinary**.

---

##  Features

- Edit Header title dynamically  
- Upload Header image (Cloudinary integration)  
- Edit Navbar links (label & URL)  
- Edit Footer contact details  
- Live preview of all changes  
- Save data to backend  
- Persistent data using localStorage  
- Responsive UI built with Tailwind CSS  

---

##  Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Cloudinary (Image Upload)
- LocalStorage

### Backend
- Node.js
- Express.js
- CORS

---

## 📂 Project Structure

root/
├── frontend/
│ ├── src/
│ ├── package.json
│ └── .env
├── backend/
│ ├── server.js
│ ├── package.json
│ └── .env
├── .gitignore
└── README.md



---

## 🔐 Environment Variables

### Frontend (`frontend/.env`)
Replace the values with your Cloudinary credentials.

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset


---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

git clone <your-repo-url>


### 2️⃣ Backend Setup
cd backend
npm install
node server.js


Backend runs on `http://localhost:5000`

---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs on `http://localhost:5173`



## 🎯 Project Purpose

This project demonstrates:
- Dynamic UI rendering  
- React state management  
- REST API integration  
- File uploading with Cloudinary  
- Persistent storage using localStorage  

Built as part of a **Full-Stack Developer Internship Assessment**


## 👨‍💻 Author

**Hethuja C**
