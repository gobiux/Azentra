/* ============================================================
   Notification Detail — Approved
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { employeeUser, employeeNav, notifications, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderNotifications() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="app-layout">
      <aside class="app-sidebar" id="app-sidebar"></aside>
      <main class="app-main">
        <header class="app-topbar" id="app-topbar"></header>
        <div class="app-content animate-fade-in notification-detail" id="page-content"></div>
      </main>
    </div>
  `;

  renderSidebar(employeeNav, employeeUser);
  renderTopbar(employeeUser);

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <div class="flex items-center gap-12 mb-24">
      <button class="btn btn-ghost" id="btn-back" style="padding:8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      </button>
      <div>
        <h1 class="page-title" style="font-size:1.5rem;">Notification</h1>
      </div>
    </div>

    <!-- Success Banner -->
    <div class="notification-banner success">
      <div class="banner-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div>
        <h3>Your request was approved!</h3>
        <p>Figma Enterprise is ready for use. Your license has been provisioned.</p>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="notification-body">
      <!-- Left: License Details -->
      <div class="provisioning-section">
        <h2>Provisioning Complete</h2>
        <p>Your Figma Enterprise license has been activated and assigned. You can start using it immediately.</p>

        <div class="license-detail-card">
          <div class="license-detail-top">
            <div class="license-detail-info">
              <div class="tool-icon figma" style="width:52px;height:52px;font-size:1.5rem;border-radius:10px;">F</div>
              <div>
                <h3>Figma Enterprise</h3>
                <span class="badge badge-primary" style="margin-top:4px;">Design</span>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" id="btn-view-license">View License</button>
          </div>

          <div class="license-detail-bottom">
            <div class="detail-item">
              <div class="label-text">Seat Utilization</div>
              <div class="detail-value">3 / 3 Seats</div>
              <div class="progress-bar mt-8" style="height:4px;">
                <div class="progress-bar-fill success" style="width:100%;"></div>
              </div>
            </div>
            <div class="detail-item">
              <div class="label-text">Effective Date</div>
              <div class="detail-value">Aug 24, 2023</div>
            </div>
            <div class="detail-item">
              <div class="label-text">License Type</div>
              <div class="detail-value success">Named User</div>
            </div>
          </div>

          <div class="license-renewal-note">
            ℹ️ Auto-renewal enabled · Next renewal: Aug 24, 2024
          </div>
        </div>

        <!-- Recent Notifications -->
        <div class="recent-notifications mt-32">
          <div class="recent-notifications-header">
            <h3>Recent Notifications</h3>
            <a href="#/employee-dashboard">View All</a>
          </div>
          ${notifications.map(notif => {
            const bgMap = {
              approved: 'background:#E8F8F5;color:#00B894;',
              rejected: 'background:#FDEDEC;color:#E74C3C;',
              renewal: 'background:#FFF9E6;color:#B8860B;',
              info: 'background:#E3F2FD;color:#0984E3;',
            };
            return `
              <div class="notification-list-item" data-type="${notif.type}">
                <div class="notif-icon" style="${bgMap[notif.type] || ''}">
                  ${icons[notif.icon] || '📋'}
                </div>
                <div class="notif-content">
                  <h4>${notif.title}</h4>
                  <p>${notif.description}</p>
                </div>
                <span class="notif-time">${notif.time}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Right: Timeline + Assigned -->
      <div>
        <div class="activity-timeline-card">
          <h4>Activity Timeline</h4>
          <div class="timeline-item">
            <div class="timeline-dot active"></div>
            <div class="timeline-content">
              <div class="timeline-label">✅ Approved</div>
              <div class="timeline-date">Aug 24, 2023 · 11:30 AM</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--primary-light);"></div>
            <div class="timeline-content">
              <div class="timeline-label">In Review</div>
              <div class="timeline-date">Aug 23, 2023 · 2:15 PM</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot" style="background:var(--border);"></div>
            <div class="timeline-content">
              <div class="timeline-label">Request Submitted</div>
              <div class="timeline-date">Aug 22, 2023 · 9:30 AM</div>
            </div>
          </div>
        </div>

        <div class="assigned-to-card">
          <h4>Assigned To</h4>
          <div class="assigned-user">
            <div class="avatar" style="background:#E8E5FF;color:#6C5CE7;">PS</div>
            <div class="user-details">
              <div class="name">Priya Singh</div>
              <div class="role">IT Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-back')?.addEventListener('click', () => navigate('employee-dashboard'));

  // Notification click handlers
  content.querySelectorAll('.notification-list-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.dataset.type;
      if (type === 'rejected') navigate('rejection-notification');
    });
  });
}
