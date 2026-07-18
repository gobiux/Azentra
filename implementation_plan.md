# Azentra License Ledger

A pixel-faithful frontend implementation of **Azentra License Ledger**, a modern SaaS License Management platform. This project recreates the provided design screens as a production-quality frontend using **Vite**, **Vanilla JavaScript**, and **Vanilla CSS** while maintaining a scalable component-based architecture.

---

## 📌 Overview

Azentra License Ledger is a SaaS application that helps organizations manage software licenses, employee requests, approvals, renewals, and audit logs through a clean and intuitive interface.

This project focuses on translating UI/UX designs into a responsive, reusable, and maintainable frontend.

---

## ✨ Features

### Employee Portal

- Login screen
- Employee Dashboard
- Request New License
- Request Status Tracking
- Approved Notification
- Rejected Notification

### Admin Portal

- Admin Dashboard
- Incoming Request Queue
- License Ledger
- Audit Log
- Renewal Monitoring

### UI Components

- Responsive Sidebar Navigation
- Top Navigation Bar
- Footer
- Status Badges
- Progress Bars
- Step Indicators
- Cards
- Tables
- Tabs
- Toast Notifications
- Interactive Forms

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite | Development & Build Tool |
| HTML5 | Structure |
| Vanilla JavaScript | Application Logic |
| Vanilla CSS | Styling |
| Google Fonts (Inter) | Typography |

---

# 🎨 Design System

## Color Palette

| Token | Hex |
|--------|------|
| Primary | `#6C5CE7` |
| Primary Light | `#A29BFE` |
| Success | `#00B894` |
| Warning | `#FDCB6E` |
| Danger | `#E74C3C` |
| Background | `#F8F9FA` |
| Surface | `#FFFFFF` |
| Text Primary | `#2D3436` |
| Text Secondary | `#636E72` |
| Border | `#E9ECEF` |

### Typography

- Font Family: **Inter**
- Page Title – 32px Bold
- Section Header – 20px SemiBold
- Body – 14–15px
- Caption – 12px Uppercase

---

# 📁 Project Structure

```text
Azentra/
├── index.html
├── package.json
├── vite.config.js
├── src/
│
├── main.js
├── router.js
│
├── data/
│   └── mockData.js
│
├── components/
│   ├── sidebar.js
│   ├── topbar.js
│   ├── footer.js
│   ├── badge.js
│   ├── progressBar.js
│   └── stepIndicator.js
│
├── pages/
│   ├── login.js
│   ├── employeeDashboard.js
│   ├── requestLicense.js
│   ├── requestStatus.js
│   ├── notifications.js
│   ├── rejectionNotification.js
│   ├── adminDashboard.js
│   ├── requestsQueue.js
│   └── auditLog.js
│
└── styles/
    ├── index.css
    ├── sidebar.css
    ├── topbar.css
    ├── login.css
    ├── dashboard.css
    ├── request.css
    ├── notifications.css
    ├── audit.css
    └── components.css
```

---

# 📄 Implemented Screens

## Employee

- Login
- Employee Dashboard
- Request License
- Request Status
- Approved Notification
- Rejected Notification

## Admin

- Dashboard
- Request Queue
- Audit Log

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/azentra-license-ledger.git
```

## Navigate

```bash
cd azentra-license-ledger
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

---

# 📦 Build Production Version

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

---

# 🎯 UI Highlights

- Pixel-perfect implementation
- Responsive Layout
- Reusable Components
- Modern Dashboard UI
- Hash-based SPA Routing
- Hover & Focus States
- Interactive Forms
- Progress Indicators
- Status Badges
- Pagination
- Toast Feedback
- Mock Data Integration

---

# 📱 Responsive

Optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🔄 Routing

The application uses a lightweight hash-based router.

Example routes:

```
#/login
#/employee-dashboard
#/request-license
#/request-status
#/notifications
#/rejection
#/admin-dashboard
#/requests
#/audit-log
```

---

# 🧪 Testing

## Automated

- npm run dev
- Console Error Check
- Route Navigation

## Manual

- Pixel Comparison with Design
- Hover States
- Button Feedback
- Responsive Testing
- Form Validation
- Navigation Flow

---

# 📌 Future Improvements

- Backend Integration
- Authentication
- Database Connectivity
- Role-Based Access Control
- Dark Mode
- API Integration
- Real-time Notifications
- Search & Filtering
- Export Reports
- License Analytics Dashboard

---

# 👨‍💻 Author

**Gobinath**

UI/UX Developer

- Portfolio: *(Add your portfolio URL)*
- GitHub: https://github.com/yourusername
- LinkedIn: *(Add your LinkedIn URL)*

---

# 📄 License

This project is developed for educational and portfolio purposes.

All UI designs belong to their respective owners.