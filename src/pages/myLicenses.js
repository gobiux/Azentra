/* ============================================================
   My Licenses Page (Employee)
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { employeeUser, employeeNav, employeeLicenses, toolIcons, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderMyLicenses() {
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
  content.innerHTML = `
    <div class="flex items-center justify-between mb-24">
      <div>
        <h1 class="page-title">My Licenses</h1>
        <p class="page-subtitle">All software licenses assigned to you</p>
      </div>
      <button class="btn btn-primary" id="btn-request-new">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Request New License
      </button>
    </div>

    <!-- Summary Stats -->
    <div class="grid-3 mb-32 stagger-children">
      <div class="stat-card">
        <span class="stat-label">Total Assigned</span>
        <span class="stat-value">${employeeLicenses.length}</span>
        <span class="stat-meta success">All provisioned</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Active</span>
        <span class="stat-value">${employeeLicenses.filter(l => l.status === 'Active').length}</span>
        <span class="stat-meta success">In good standing</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Expiring Soon</span>
        <span class="stat-value">${employeeLicenses.filter(l => l.status === 'Warning').length}</span>
        <span class="stat-meta warning">Needs attention</span>
      </div>
    </div>

    <!-- License Cards -->
    <div class="section-title mb-16">License Details</div>
    <div class="stagger-children" style="display:flex;flex-direction:column;gap:16px;">
      ${employeeLicenses.map((lic, i) => {
        const ti = toolIcons[lic.tool] || { src: './Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
        const statusClass = lic.status === 'Active' ? 'success' : 'warning';
        return `
          <div class="card" style="animation-delay:${i * 80}ms;">
            <div class="flex items-center justify-between">
              <div class="tool-info">
                <div class="tool-icon" style="background: ${ti.bg}; width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:10px;">
                  <img src="${ti.src}" class="${ti.filter}" style="width: 24px; height: 24px;" alt="${lic.tool}" />
                </div>
                <div class="tool-details">
                  <div class="tool-name" style="font-size:1rem;">${lic.tool}</div>
                  <div class="tool-category">${lic.vendor} · ${lic.category}</div>
                </div>
              </div>
              <span class="badge badge-${statusClass} badge-dot">${lic.status}</span>
            </div>
            <div class="grid-3 mt-16" style="border-top:1px solid var(--border-light);padding-top:16px;">
              <div>
                <div class="label-text">License Type</div>
                <div style="font-weight:600;margin-top:4px;">${lic.type}</div>
              </div>
              <div>
                <div class="label-text">Expiry Date</div>
                <div style="font-weight:600;margin-top:4px;">${lic.expiry}</div>
              </div>
              <div>
                <div class="label-text">Category</div>
                <div style="margin-top:4px;"><span class="badge badge-primary">${lic.category}</span></div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.getElementById('btn-request-new')?.addEventListener('click', () => navigate('request-license'));
}
