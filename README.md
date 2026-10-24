# Link-Vault
A MERN Stack based project
# LinkVault

A simple URL shortener built with the MERN stack. Paste a long link, get a short one, and track how many times it has been clicked.

## Features
- Shorten any valid URL to a 6-character code
- Redirect from the short link to the original URL
- Click counter for every link
- Input validation for invalid URLs

## Tech Stack
- MongoDB Atlas, Express, React (Vite), Node.js

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- A free MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/linkvault.git
cd linkvault
```

### 2. Backend setup
```bash
cd server
npm install
```
Create a `.env` file inside `server/`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Start the server:
```bash
node server.js
```
The API runs at http://localhost:5000

### 3. Frontend setup
Open a second terminal:
```bash
cd client
npm install
```
Create a `.env` file inside `client/`:
```
VITE_API_URL=http://localhost:5000
```
Start the app:
```bash
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

### Environment Variables
| File | Variable | Purpose |
|------|----------|---------|
| server/.env | MONGO_URI | MongoDB Atlas connection string |
| server/.env | PORT | Port for the API |
| client/.env | VITE_API_URL | Backend URL used by the frontend |

## API
- POST /api/links : create a short link
- GET /api/links : list all links
- GET /:code : redirect and count the click

## Live Demo
- Frontend: https://link-vault-three-iota.vercel.app/
- Backend API: https://link-vault-api-51c2.onrender.com