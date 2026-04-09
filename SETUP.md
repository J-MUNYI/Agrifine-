# Agrifine Consulting - MERN Setup Guide

## 📦 Installation Steps

### 1. Install Backend Dependencies

```bash
cd server
npm install express cors dotenv bcryptjs jsonwebtoken
```

**Note:** No MongoDB/Mongoose needed! We're using simple file-based storage.

### 2. Install Frontend Dependencies

```bash
cd client
npm install react-router-dom axios tailwindcss postcss autoprefixer
```

### 3. Setup Environment Variables (Optional)

Create `server/.env` file (optional, defaults will work):
```
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🎨 Features Implemented

✅ **Frontend:**
- React Router for navigation
- Tailwind CSS with green, white, and brown theme
- Responsive design
- Home, About, Products, Contact pages
- Login page with authentication
- Auth context for state management

✅ **Backend:**
- Express.js server
- **File-based user storage** (no database needed!)
- JWT authentication
- User registration and login
- Protected routes middleware

## 📁 Project Structure

```
Agrifine Consulting/
├── client/
│   ├── src/
│   │   ├── components/     # Navbar, Footer
│   │   ├── pages/          # Home, About, Products, Contact, Login
│   │   ├── context/        # AuthContext
│   │   ├── utils/          # API utilities
│   │   └── App.jsx
│   └── package.json
├── server/
│   ├── controllers/        # authController (file-based)
│   ├── routes/            # authRoutes
│   ├── middleware/        # auth middleware
│   ├── data/             # users.json (auto-created)
│   ├── server.js
│   └── package.json
└── README.md
```

## 🔐 Authentication

The login system uses:
- **JWT tokens** stored in localStorage
- **File-based storage** (users.json) - no database needed!
- **bcrypt** for password hashing

### Creating Your First User

You can register a user through the `/api/auth/register` endpoint or create one manually in `server/data/users.json` (after first registration).

## 🚀 Quick Start

1. Install dependencies (commands above)
2. Start both servers
3. Register/login through the UI
4. That's it! No database setup needed.

## 💡 Why No MongoDB?

For an informational website, file-based storage is perfect:
- ✅ Simpler setup (no database installation)
- ✅ Faster to get started
- ✅ Easy to backup (just copy the JSON file)
- ✅ Can upgrade to MongoDB later if needed

## 🎯 Next Steps

1. Install all dependencies
2. Run the application
3. Create your first admin account
4. Customize UI based on your preferences
5. Add more features as needed
