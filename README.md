# Dynamic UI Dashboard 

A full-stack dynamic UI allow users to customize a website's **Header, Navbar, and Footer** in real time.

Changes are instantly reflected on the live preview and persisted using a backend API and localStorage

Header images are uploading using **Cloudinary**

## Features
Edit Header title dynamically
Upload Header image (Cloudinary integration)
Edit Navbar links (label & URL)
Edit Footer contact details
Live preview of all changes
Save data to backend 
Persistent data using localStorage 
Responsive UI built with Tailwind css

## Tech Stack

**Frontend**
React (Vite)
Tailwind CSS
Cloudinary (Image Upload)
LocalStorage

**Backend**
Node.js
Express.js
CORS

## Project Structure

## Environment Variables
### Backend (`backend/.env`)
### Frontend (`frontend/.env`)
Replace `your_cloud_name` and `your_upload_preset` with your Cloudinary credentials.
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

## 🚀 Installation & Setup
 1. Clone Repository  [ git clone <your-repo-url> ]

 2. Backend Setup
    cd backend
    npm install
    node server.js

3. Frontend Setup
   cd frontend
   npm install
   npm run dev

## Project Purpose
This project demonstrates:
  Dynamic UI rendering
  React state management
  REST API integration
  File uploading
  Persistent storage

Built as part of a Front-End Developer Internship Assessment.

## Author 
Hethuja C

