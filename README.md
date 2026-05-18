# Workout Tracker

Fullstack fitness tracking application built with React, Express, Firebase Authentication and Supabase.

---

## Features

- User registration and login
- Firebase Authentication
- Workout creation and deletion
- Persistent workout storage
- Responsive UI
- Supabase database integration
- REST API architecture
- Express backend structure
- Vercel deployment

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- Node.js
- Express
- Firebase Authentication

### Database
- Supabase

### Deployment
- Vercel

---

## Architecture

```bash
client/   → React frontend
server/   → Express backend
docs/     → Project documentation
```

### Backend Structure

```bash
server/src/
├── config/
├── controllers/
├── data/
├── routes/
├── services/
└── index.js
```

---

## Current Status

✅ Firebase Authentication working

✅ Supabase integration working

✅ Workout CRUD working

✅ Express backend configured

✅ Vercel deployment working

---

## Next Improvements

- Backend authentication validation
- Protected API routes
- Row Level Security (RLS)
- Workout history filters
- Mobile optimization
- Dashboard analytics
- Exercise management
- User-specific dashboard

---

## Installation

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

### Firebase

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Supabase

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## Production Build

```bash
cd client
npm run build
```

---

## Deployment

Deployed with Vercel.

---

## Author

Ivan Bussio
