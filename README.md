# SafeMarg.io 🚦

SafeMarg.io is a full-stack web application that helps identify road accident-prone areas using interactive maps and heatmap visualization.

The project allows users to report accident locations, analyze severity distribution, and visually identify high-risk zones.

---

## Live Demo 🌍

Frontend: https://safe-marg-io.vercel.app/

Backend API: https://safemarg-io.onrender.com/api/accidents

---

## Features ✨

- Interactive map using Leaflet.js
- Heatmap visualization of accident hotspots
- Severity-based color indicators
- Clustered markers for better visualization
- Add accident by clicking on map
- City-based accident tracking
- Analytics dashboard with charts
- Filter accidents by severity
- Responsive UI design
- Full stack architecture

---

## Tech Stack 💻

Frontend:
- React.js
- Leaflet.js
- Recharts
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

Deployment:
- Vercel (Frontend)
- Render (Backend)

---

---

## Installation ⚙️

### Clone repository
git clone https://github.com/ashisherikilla/SafeMarg.io.git


---

### Backend Setup
cd server
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string

Run server: npm run dev


---

### Frontend Setup

cd client
npm install
npm run dev

---

## API Endpoints 🔌

GET accidents

GET /api/accidents


Add accident
POST /api/accidents


Example request body:


{
"location": {
"lat": 17.3850,
"lng": 78.4867,
"city": "Hyderabad"
},
"severity": "High",
"description": "Accident near signal"
}


---

## Future Improvements 🚀

- User authentication
- Real-time accident updates
- Government open data integration
- Auto-detect city using reverse geocoding
- Export accident reports (PDF/CSV)
- Dashboard statistics cards
- Mobile app version

---

## Author 👨‍💻

Erikilla Ashish

Full Stack Developer
