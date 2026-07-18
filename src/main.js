/* ============================================================
   Azentra License Ledger — Main Entry Point
   ============================================================ */

// Styles
import './styles/index.css';
import './styles/sidebar.css';
import './styles/topbar.css';
import './styles/login.css';
import './styles/dashboard.css';
import './styles/request.css';
import './styles/notifications.css';
import './styles/audit.css';

// Router
import { registerRoute, initRouter } from './router.js';

// Pages
import { renderLogin } from './pages/login.js';
import { renderEmployeeDashboard } from './pages/employeeDashboard.js';
import { renderMyLicenses } from './pages/myLicenses.js';
import { renderMyRequests } from './pages/myRequests.js';
import { renderRequestLicense } from './pages/requestLicense.js';
import { renderRequestStatus } from './pages/requestStatus.js';
import { renderNotifications } from './pages/notifications.js';
import { renderRejectionNotification } from './pages/rejectionNotification.js';
import { renderAdminDashboard } from './pages/adminDashboard.js';
import { renderAllLicenses } from './pages/allLicenses.js';
import { renderRequestsQueue } from './pages/requestsQueue.js';
import { renderAdminRenewals } from './pages/adminRenewals.js';
import { renderAuditLog } from './pages/auditLog.js';

// Register all routes
registerRoute('login', renderLogin);

// Employee routes
registerRoute('employee-dashboard', renderEmployeeDashboard);
registerRoute('my-licenses', renderMyLicenses);
registerRoute('my-requests', renderMyRequests);
registerRoute('request-license', renderRequestLicense);
registerRoute('request-status', renderRequestStatus);
registerRoute('notifications', renderNotifications);
registerRoute('rejection-notification', renderRejectionNotification);

// Admin routes
registerRoute('admin-dashboard', renderAdminDashboard);
registerRoute('all-licenses', renderAllLicenses);
registerRoute('requests-queue', renderRequestsQueue);
registerRoute('admin-renewals', renderAdminRenewals);
registerRoute('audit-log', renderAuditLog);

// Initialize the router
initRouter();
