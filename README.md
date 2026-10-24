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

## Run Locally
1. Clone the repo
2. Backend:
   cd server
   npm install
   Create a .env file with MONGO_URI and PORT=5000
   node server.js
3. Frontend:
   cd client
   npm install
   Create a .env file with VITE_API_URL=http://localhost:5000
   npm run dev

## API
- POST /api/links : create a short link
- GET /api/links : list all links
- GET /:code : redirect and count the click

## Live Demo
- Frontend: https://link-vault-three-iota.vercel.app/
- Backend API: https://link-vault-api-51c2.onrender.com