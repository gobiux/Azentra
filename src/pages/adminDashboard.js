/* ============================================================
   Admin Dashboard Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { adminUser, adminNav, adminStats, adminLicenses, toolIcons, auditEntries, icons } from '../data/mockData.js';
import { navigate } from '../router.js';

export function renderAdminDashboard() {
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
    <!-- Stats -->
    <div class="dashboard-stats stagger-children">
      ${adminStats.map(stat => `
        <div class="stat-card">
          <span class="stat-label">${stat.label}</span>
          <div class="stat-row">
            <span class="stat-value">${stat.value}</span>
            <span class="stat-meta ${stat.metaClass}">${stat.meta}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Expiry Banner -->
    <div class="urgency-banner animate-slide-down mt-8 mb-24">
      <div class="banner-text">
        <img src="/Icons/material-symbols_warning-outline-rounded.png" style="width: 24px; filter: invert(100%);" alt="Warning" />
        <div>
          <strong>2 licenses expiring in 14 days — Renew now.</strong>
          <div style="font-size:0.8125rem;opacity:0.85;margin-top:2px;">Adobe Creative Cloud & Slack Enterprise are approaching their billing cycle.</div>
        </div>
      </div>
      <button class="btn" id="btn-review-renewals">Review Renewals</button>
    </div>

    <!-- Active License Ledger -->
    <div class="license-table-header">
      <div>
        <h2 class="section-title">Active License Ledger</h2>
        <p class="page-subtitle" style="margin-top:2px;">Real-time utilization and compliance tracking</p>
      </div>
      <div class="table-actions">
        <button title="Filter"><img src="/Icons/mynaui_filter-solid.png" class="icon-grey" style="width: 16px;" alt="Filter" /></button>
        <button title="Download"><img src="/Icons/material-symbols_download-rounded.png" class="icon-grey" style="width: 16px;" alt="Download" /></button>
      </div>
    </div>

    <div class="card" style="padding:0;overflow:hidden;">
      <table class="data-table" id="admin-licenses-table">
        <thead>
          <tr>
            <th>Tool</th>
            <th>Vendor</th>
            <th>Seats Capacity</th>
            <th>Utilization</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${adminLicenses.map(lic => {
            const ti = toolIcons[lic.tool] || { src: '/Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
            const statusClass = lic.status === 'Active' ? 'success' : lic.status === 'Warning' ? 'warning' : 'danger';
            const pctColor = lic.pct > 90 ? 'success' : lic.pct > 70 ? 'warning' : 'success';
            return `
              <tr>
                <td>
                  <div class="tool-info">
                    <div class="tool-icon" style="background: ${ti.bg};">
                      <img src="${ti.src}" class="${ti.filter}" style="width: 20px; height: 20px;" alt="${lic.tool}" />
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
                  ` : `
                    <span class="badge badge-neutral">Usage Based</span>
                    <span style="font-size:0.8125rem;color:var(--text-secondary);margin-left:8px;">Scale-Up</span>
                  `}
                </td>
                <td style="font-size:0.875rem;">${lic.expiry}</td>
                <td><span class="badge badge-${statusClass} badge-dot">${lic.status}</span></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>

      <div class="pagination" style="padding:16px 24px;">
        <span class="page-info">Showing 1-4 of 142 licenses</span>
        <div class="page-controls">
          <button class="btn btn-ghost btn-sm">Previous</button>
          <button class="btn btn-primary btn-sm">Next</button>
        </div>
      </div>
    </div>

    <!-- Bottom: Audit + Optimization -->
    <div class="dashboard-bottom">
      <!-- System Audit Log Preview -->
      <div class="card">
        <h3 class="section-title mb-16">System Audit Log</h3>
        <div class="audit-preview">
          ${auditEntries.slice(0, 3).map(entry => `
            <div class="audit-preview-item">
              <div class="audit-icon" style="background: ${entry.bg};">
                <img src="${entry.iconSrc}" class="${entry.iconFilter}" style="width: 20px; height: 20px;" alt="Audit" />
              </div>
              <div>
                <div class="audit-text">${entry.text}</div>
                <div class="audit-meta">${entry.meta} • ${entry.time}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Optimization Card -->
      <div class="optimization-card animate-slide-up" style="animation-delay:300ms;">
        <div class="opt-icon"><img src="/Icons/boxicons_light-bulb.png" style="width: 24px; filter: invert(100%);" alt="Idea" /></div>
        <h3>Optimization Opportunity</h3>
        <p>We've detected 12 inactive seats in Figma. Reclaiming these could save your department $180/mo.</p>
        <button class="btn" id="btn-view-analytics">View Analytics</button>
      </div>
    </div>
  `;

  // Event handlers
  document.getElementById('btn-review-renewals')?.addEventListener('click', () => {
    navigate('requests-queue');
  });
}
