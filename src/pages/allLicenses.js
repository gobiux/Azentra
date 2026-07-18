/* ============================================================
   All Licenses Page (Admin)
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { adminUser, adminNav, adminLicenses, toolIcons, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

// Extended license list for this dedicated page
const allLicenses = [
  ...adminLicenses,
  { tool: 'Figma Enterprise', vendor: 'Figma Inc.', category: 'Design', seats: '80 Seats', used: 72, total: 80, pct: 90, expiry: 'Dec 15, 2024', status: 'Active' },
  { tool: 'GitHub Enterprise', vendor: 'GitHub Inc.', category: 'Development', seats: '120 Seats', used: 98, total: 120, pct: 82, expiry: 'Feb 20, 2025', status: 'Active' },
  { tool: 'Notion Team', vendor: 'Notion Labs', category: 'Productivity', seats: '200 Seats', used: 145, total: 200, pct: 73, expiry: 'Apr 10, 2025', status: 'Active' },
  { tool: 'Tableau Professional', vendor: 'Salesforce', category: 'Analytics', seats: '30 Seats', used: 28, total: 30, pct: 93, expiry: 'Nov 30, 2024', status: 'Warning' },
];

export function renderAllLicenses() {
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

  renderSidebar(adminNav, adminUser);
  renderTopbar(adminUser);

  const content = document.getElementById('page-content');
  content.innerHTML = `
    <div class="flex items-center justify-between mb-24">
      <div>
        <h1 class="page-title">All Licenses</h1>
        <p class="page-subtitle">Complete inventory of organization-wide software licenses</p>
      </div>
      <div class="flex gap-8">
        <button class="btn btn-outline" id="btn-export">
          ${icons.download}
          Export CSV
        </button>
        <button class="btn btn-primary" id="btn-add-license">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add License
        </button>
      </div>
    </div>

    <!-- Summary Row -->
    <div class="grid-4 mb-32 stagger-children">
      <div class="stat-card">
        <span class="stat-label">Total Licenses</span>
        <span class="stat-value">${allLicenses.length}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Active</span>
        <span class="stat-value">${allLicenses.filter(l => l.status === 'Active').length}</span>
        <span class="stat-meta success">Compliant</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Expiring Soon</span>
        <span class="stat-value">${allLicenses.filter(l => l.status === 'Warning').length}</span>
        <span class="stat-meta warning">Action needed</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Total Seats</span>
        <span class="stat-value">${allLicenses.reduce((sum, l) => sum + (l.total || 0), 0).toLocaleString()}</span>
      </div>
    </div>

    <!-- Search & Filter -->
    <div class="flex items-center gap-12 mb-16">
      <input type="text" class="input-field search-input" placeholder="Search licenses..." style="max-width:320px;" id="license-search" />
      <button class="btn btn-outline btn-sm">${icons.filter} Filter</button>
    </div>

    <!-- License Table -->
    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table" id="all-licenses-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Vendor</th>
            <th>Seats</th>
            <th>Utilization</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${allLicenses.map(lic => {
            const ti = toolIcons[lic.tool] || { src: '/Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
            const statusClass = lic.status === 'Active' ? 'success' : 'warning';
            const pctColor = lic.pct > 90 ? 'danger' : lic.pct > 70 ? 'warning' : 'success';
            return `
              <tr>
                <td>
                  <div class="tool-info">
                    <div class="tool-icon" style="background: ${ti.bg}; width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:6px;">
                      <img src="${ti.src}" class="${ti.filter}" style="width: 16px; height: 16px;" alt="${lic.tool}" />
                    </div>
                    <div class="tool-details">
                      <div class="tool-name">${lic.tool}</div>
                      <div class="tool-category">${lic.category}</div>
                    </div>
                  </div>
                </td>
                <td style="font-size:0.875rem;">${lic.vendor}</td>
                <td><strong>${lic.seats}</strong></td>
                <td>
                  ${lic.pct !== null ? `
                    <div class="utilization-cell">
                      <div class="util-text">
                        <span class="util-count">${lic.used}/${lic.total}</span>
                        <span class="util-pct" style="color:var(--${pctColor})">${lic.pct}%</span>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-bar-fill ${pctColor}" style="width:${lic.pct}%;"></div>
                      </div>
                    </div>
                  ` : '<span class="badge badge-neutral">Usage Based</span>'}
                </td>
                <td style="font-size:0.875rem;">${lic.expiry}</td>
                <td><span class="badge badge-${statusClass} badge-dot">${lic.status}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      <div class="pagination" style="padding:16px 24px;">
        <span class="page-info">Showing 1-${allLicenses.length} of ${allLicenses.length} licenses</span>
        <div class="page-controls">
          <button class="btn btn-outline btn-sm" disabled>Previous</button>
          <button class="btn btn-primary btn-sm" disabled>Next</button>
        </div>
      </div>
    </div>
  `;

  // Search filtering
  document.getElementById('license-search')?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('#all-licenses-table tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
