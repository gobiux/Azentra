# Azentra License Ledger Frontend

## Description
A frontend application for managing and tracking software licenses, built with **Vite** and **Vanilla CSS**. This project implements all screens shown in the PDF design mockups, including login, dashboards, license requests, and audit features. It uses a client-side hash router for navigation and includes a design system matching the provided PDFs exactly.


## Key Features
- **Login Page**: Clean, centered interface with email/password authentication
- **Employee Dashboard**: Status cards, active licenses table, and request CTA
- **License Request Workflow**: Multi-step form with tool selection, justification, and urgency
- **Request Status Page**: Step indicators, approval chain, and activity timeline
- **Notifications**: Approved/rejected status with detailed information
- **Admin Dashboard**: License ledger, expiry warnings, and audit log
- **Audit Log**: Activity history with filters and timeline data


## Technology Stack
- Vite (vanilla JS template) for fast development server
- Vanilla CSS (no frameworks) for exact design system match
- Google Fonts (Inter) for typography consistency
- Client-side hash routing for navigation
- Scriptable mock data (no backend required)
- Boxicons and Material Symbols for SVGs


## Project Structure
```
Azentra/
├── index.html               # Entry point
├── package.json             # Project config
├── vite.config.js           # Vite config
├── src/
│   ├── main.js              # Entry point + router setup
│   ├── router.js            # Hash-based client-side router
│   ├── data/
│   │   └── mockData.js      # Mock data for all screens
│   ├── components/
│   │   ├── sidebar.js       # Navigation components
│   │   ├── topbar.js        # Header elements
│   │   └── status components
│   ├── pages/
│   │   ├── all implementation screens (login, dashboard, requests, etc.)
│   └── styles/
│       └── All design-specific CSS files
```


## How to Run
1. Clone repository: `git clone D:/Work/Portfolio/Azentra-App`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev` (live reload at localhost:5173)
4. Build for production: `npm run build`
5. View in browser: Open `dist/index.html`


## Open Questions
1. **Role Switching**: Should the interface allow switching between employee/admin views (as shown in PDFs), or should it be simplified with universal navigation?
2. **Interactivity**: While all visual elements will be implemented (hover states, animations, button feedback), should we add placeholder functionality for backend actions (e.g., "Approve Request" showing a toast but not persisting data)?


## Verification Plan
- **Automated**: `npm run dev` check + route testing in browser
- **Manual**: Side-by-side comparison with PDF mockups + interactive element testing
- Special attention to: 
  - Status badge visual accuracy
  - Color palette consistency
  - Typography hierarchy


## Design System Highlights
- **Colors**: Exact match to PDF palette (#6C5CE7 indigo, #00B894 green, etc.)
- **Typography**: Inter font at specified sizes (32px headings, 14-15px body)
- **Layout**: Fixed sidebar, top bar with search/user info
- **Components**: Custom badges, progress bars, step indicators


*Note: This frontend is built to function standalone with mock data. All backend integration points (e.g., license database) would need to be implemented separately.*