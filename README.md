# E-Commerce DevOps Project

A portfolio-ready full-stack e-commerce demo with React, Node.js, MongoDB, Docker, and GitHub Actions CI.

## Features

- Modern responsive UI (Bootstrap)
- Product listing, search, and category filter
- Shopping cart with localStorage persistence
- MongoDB product storage with auto-seed data
- Docker Compose for local deployment
- GitHub Actions CI pipeline

## Tech Stack

| Layer      | Technology        |
| ---------- | ----------------- |
| Frontend   | React, Bootstrap  |
| Backend    | Node.js, Express  |
| Database   | MongoDB, Mongoose |
| DevOps     | Docker, GitHub Actions |

## Project Structure

```
frontend/src/
  components/   # Navbar, Footer, ProductCard, etc.
  pages/        # Home, Products, Cart, About
  services/     # API and cart storage
  styles/       # Custom CSS
  context/      # Cart state

backend/
  models/       # Mongoose schemas
  routes/       # API routes
  controllers/  # Route handlers
  data/         # Seed products
  config/       # Database connection
```

## Run with Docker

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

## Run Locally (without Docker)

**Backend**

```bash
cd backend
npm install
npm start
```

**Frontend** (new terminal)

```bash
cd frontend
npm install
npm start
```

Ensure MongoDB is running locally at `mongodb://localhost:27017/ecommerce`.

## API Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | `/`                | Health check     |
| GET    | `/products`        | List all products |
| GET    | `/products/:id`    | Single product   |

## CI Pipeline

Pushes to `master` trigger GitHub Actions:

1. Install backend and frontend dependencies
2. Build Docker images with `docker compose build`
