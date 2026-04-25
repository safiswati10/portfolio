# 🚀 Safi ur Rehman - Portfolio Website

A full-stack MERN portfolio with Google Meet booking, project showcases, and animated UI.

---

## 📁 Folder Structure

```
portfolio/
├── frontend/        ← React.js app
│   ├── src/
│   │   ├── components/   ← All UI components
│   │   ├── data/         ← Your CV data (edit here!)
│   │   ├── styles/       ← Global CSS
│   │   └── App.js
│   └── package.json
│
└── backend/         ← Node.js + Express + MongoDB
    ├── routes/      ← API routes
    ├── models/      ← MongoDB schemas
    ├── server.js    ← Main server
    └── .env         ← Environment variables
```

---

## ⚡ Quick Setup

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

---

### 1️⃣ Setup Backend

```bash
cd backend
npm install
```

Edit `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=safiswati10@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:3000
```

> **Note:** For EMAIL_PASS, use Gmail App Password (not your real password).
> Go to: Google Account → Security → 2FA → App Passwords

Start backend:
```bash
npm run dev   # development (with nodemon)
# OR
npm start     # production
```

Backend runs on: `http://localhost:5000`

---

### 2️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🖼️ Adding Your Photos

Replace dummy images with real ones:

1. **Profile photo**: Save as `frontend/public/images/profile.jpg`
2. **Project 1 thumbnail**: `frontend/public/images/project1.jpg`
3. **Project 2 thumbnail**: `frontend/public/images/project2.jpg`

**Recommended sizes:**
- Profile: 400×400px (square, good quality)
- Projects: 800×450px (16:9 ratio)

---

## ✏️ Customizing Your Data

Edit `frontend/src/data/portfolioData.js` to update:
- Personal info, bio, social links
- Education history
- Work experience
- Projects (title, description, tech stack, features)
- Skills with percentages

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/meeting/book` | Book a Google Meet meeting |
| GET | `/api/meeting/` | Get all meeting bookings |
| POST | `/api/contact/send` | Send contact message |
| GET | `/api/health` | Health check |

---

## 🚀 Build for Production

```bash
# Frontend
cd frontend
npm run build

# Serve with any static host (Vercel, Netlify, etc.)
```

---

## 🛠️ Tech Stack

**Frontend:** React.js, CSS3, Framer Motion, react-scroll, react-type-animation

**Backend:** Node.js, Express.js, MongoDB, Mongoose, Nodemailer

---

## 📞 Contact

- Email: safiswati10@gmail.com
- Phone: +923185880009
- Location: Abbottabad, KPK, Pakistan
