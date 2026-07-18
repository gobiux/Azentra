/* ============================================================
   My Requests Page (Employee)
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { employeeUser, employeeNav, toolIcons, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

const myRequests = [
  { id: 'AZ-2847', tool: 'Figma Enterprise', category: 'Design', seats: 3, urgency: 'Medium', status: 'Under Review', date: 'Aug 22, 2023' },
  { id: 'AZ-2841', tool: 'Grammarly Pro', category: 'Writing', seats: 1, urgency: 'Low', status: 'Rejected', date: 'Aug 20, 2023' },
  { id: 'AZ-2835', tool: 'Notion Team', category: 'Productivity', seats: 1, urgency: 'Medium', status: 'Approved', date: 'Aug 10, 2023' },
  { id: 'AZ-2820', tool: 'Slack Enterprise', category: 'Collaboration', seats: 1, urgency: 'High', status: 'Approved', date: 'Jul 28, 2023' },
];

export function renderMyRequests() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="app-layout">
      <aside class="app-sidebar" id="app-sidebar"></aside>
      <main class="app-main">
        <header class="app-topbar" id="app-topbar"></header>
        <div class="app-content animate-fade-in" id="page-content"></div>
      </main>
    </div>
  `;

  renderSidebar(employeeNav, employeeUser);
  renderTopbar(employeeUser);

  const content = document.getElementById('page-content');

  const statusBadge = (status) => {
    const map = { 'Under Review': 'primary', 'Approved': 'success', 'Rejected': 'danger', 'Pending': 'warning' };
    return `<span class="badge badge-${map[status] || 'neutral'} badge-dot">${status}</span>`;
  };

  const urgencyBadge = (urgency) => {
    const map = { 'High': 'danger', 'Medium': 'warning', 'Low': 'success' };
    return `<span class="badge badge-${map[urgency] || 'neutral'}">${urgency}</span>`;
  };

  content.innerHTML = `
    <div class="flex items-center justify-between mb-24">
      <div>
        <h1 class="page-title">My Requests</h1>
        <p class="page-subtitle">Track all your license requests and their current status</p>
      </div>
      <button class="btn btn-primary" id="btn-new-request">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        New Request
      </button>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="request-tabs">
      <div class="tab active" data-tab="all">All</div>
      <div class="tab" data-tab="pending">Pending</div>
      <div class="tab" data-tab="approved">Approved</div>
      <div class="tab" data-tab="rejected">Rejected</div>
    </div>

    <!-- Requests Table -->
    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table" id="requests-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Software</th>
            <th>Seats</th>
            <th>Urgency</th>
            <th>Submitted</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${myRequests.map(req => {
            const ti = toolIcons[req.tool] || { src: './Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
            return `
              <tr data-status="${req.status}" class="request-row" data-id="${req.id}">
                <td><code style="font-size:0.8125rem;font-weight:600;color:var(--primary);">${req.id}</code></td>
                <td>
                  <div class="tool-info">
                    <div class="tool-icon" style="background: ${ti.bg}; width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:6px;">
                      <img src="${ti.src}" class="${ti.filter}" style="width: 16px; height: 16px;" alt="${req.tool}" />
                    </div>
                    <div class="tool-details">
                      <div class="tool-name">${req.tool}</div>
                      <div class="tool-category">${req.category}</div>
                    </div>
                  </div>
                </td>
                <td>${req.seats}</td>
                <td>${urgencyBadge(req.urgency)}</td>
                <td style="font-size:0.875rem;">${req.date}</td>
                <td>${statusBadge(req.status)}</td>
                <td>
                  <button class="btn btn-ghost btn-sm view-details-btn" data-status="${req.status}">View →</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <div class="pagination mt-8">
      <span class="page-info">Showing 1-${myRequests.length} of ${myRequests.length} requests</span>
      <div class="page-controls">
        <button class="btn btn-outline btn-sm" disabled>Previous</button>
        <button class="btn btn-primary btn-sm" disabled>Next</button>
      </div>
    </div>
  `;

  // Tab filtering
  document.getElementById('request-tabs')?.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('#request-tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.tab;
    document.querySelectorAll('#requests-table tbody tr').forEach(row => {
      const status = row.dataset.status;
      if (filter === 'all') {
        row.style.display = '';
      } else if (filter === 'pending') {
        row.style.display = status === 'Under Review' ? '' : 'none';
      } else if (filter === 'approved') {
        row.style.display = status === 'Approved' ? '' : 'none';
      } else if (filter === 'rejected') {
        row.style.display = status === 'Rejected' ? '' : 'none';
      }
    });
  });

  // View details
  content.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const status = btn.dataset.status;
      if (status === 'Rejected') navigate('rejection-notification');
      else if (status === 'Approved') navigate('notifications');
      else navigate('request-status');
    });
  });

  document.getElementById('btn-new-request')?.addEventListener('click', () => navigate('request-license'));
}
