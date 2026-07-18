/* ============================================================
   Admin Renewals Page
   ============================================================ */
import { renderSidebar } from '../components/sidebar.js';
import { renderTopbar } from '../components/topbar.js';
import { showToast } from '../components/toast.js';
import { adminUser, adminNav, toolIcons, icons } from '../data/mockData.js';

const renewals = [
  { tool: 'Adobe Creative Cloud', vendor: 'Adobe Systems Inc.', seats: '150 Seats', cost: '$22,500/yr', expiry: 'Oct 12, 2024', daysLeft: 14, status: 'Critical', autoRenew: false },
  { tool: 'Slack Enterprise', vendor: 'Salesforce', seats: '500 Seats', cost: '$75,000/yr', expiry: 'Oct 14, 2024', daysLeft: 16, status: 'Critical', autoRenew: false },
  { tool: 'Tableau Professional', vendor: 'Salesforce', seats: '30 Seats', cost: '$12,600/yr', expiry: 'Nov 30, 2024', daysLeft: 63, status: 'Upcoming', autoRenew: true },
  { tool: 'Figma Enterprise', vendor: 'Figma Inc.', seats: '80 Seats', cost: '$57,600/yr', expiry: 'Dec 15, 2024', daysLeft: 78, status: 'Upcoming', autoRenew: true },
  { tool: 'Asana Business', vendor: 'Asana Inc.', seats: '200 Seats', cost: '$59,400/yr', expiry: 'Jan 05, 2025', daysLeft: 99, status: 'Scheduled', autoRenew: true },
];

export function renderAdminRenewals() {
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
        <h1 class="page-title">Renewals</h1>
        <p class="page-subtitle">Manage upcoming license renewals and expirations</p>
      </div>
      <button class="btn btn-outline">
        ${icons.download}
        Export Report
      </button>
    </div>

    <!-- Urgency Banner -->
    <div class="urgency-banner animate-slide-down mb-24">
      <div class="banner-text">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <div>
          <strong>2 licenses expire within 30 days</strong>
          <div style="font-size:0.8125rem;opacity:0.85;margin-top:2px;">Review and take action to avoid service disruption.</div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid-3 mb-32 stagger-children">
      <div class="stat-card">
        <span class="stat-label">Critical (< 30 days)</span>
        <span class="stat-value" style="color:var(--danger);">2</span>
        <span class="stat-meta danger">Immediate action needed</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Upcoming (30-90 days)</span>
        <span class="stat-value" style="color:var(--warning-dark);">2</span>
        <span class="stat-meta warning">Auto-renewal enabled</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Scheduled (90+ days)</span>
        <span class="stat-value" style="color:var(--success);">1</span>
        <span class="stat-meta success">No action needed</span>
      </div>
    </div>

    <!-- Renewal Cards -->
    <div class="section-title mb-16">Renewal Schedule</div>
    <div class="stagger-children" style="display:flex;flex-direction:column;gap:16px;" id="renewal-list">
      ${renewals.map((r, i) => {
        const ti = toolIcons[r.tool] || { src: './Icons/ph_note.png', bg: '#F5F5F5', filter: 'icon-grey' };
        const statusMap = { 'Critical': 'danger', 'Upcoming': 'warning', 'Scheduled': 'success' };
        const statusClass = statusMap[r.status] || 'neutral';
        return `
          <div class="card" style="animation-delay:${i * 80}ms;border-left:4px solid var(--${statusClass});">
            <div class="flex items-center justify-between">
              <div class="tool-info">
                <div class="tool-icon" style="background: ${ti.bg}; width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:10px;">
                  <img src="${ti.src}" class="${ti.filter}" style="width: 24px; height: 24px;" alt="${r.tool}" />
                </div>
                <div class="tool-details">
                  <div class="tool-name" style="font-size:1rem;">${r.tool}</div>
                  <div class="tool-category">${r.vendor}</div>
                </div>
              </div>
              <div class="flex items-center gap-16">
                <span class="badge badge-${statusClass} badge-dot">${r.status}</span>
                <button class="btn btn-${r.status === 'Critical' ? 'primary' : 'outline'} btn-sm renew-btn">${r.status === 'Critical' ? 'Renew Now' : 'Review'}</button>
              </div>
            </div>
            <div class="grid-4 mt-16" style="border-top:1px solid var(--border-light);padding-top:16px;">
              <div>
                <div class="label-text">Seats</div>
                <div style="font-weight:600;margin-top:4px;">${r.seats}</div>
              </div>
              <div>
                <div class="label-text">Annual Cost</div>
                <div style="font-weight:600;margin-top:4px;">${r.cost}</div>
              </div>
              <div>
                <div class="label-text">Expiry Date</div>
                <div style="font-weight:600;margin-top:4px;">${r.expiry}</div>
              </div>
              <div>
                <div class="label-text">Auto-Renew</div>
                <div style="font-weight:600;margin-top:4px;color:var(--${r.autoRenew ? 'success' : 'danger'});">${r.autoRenew ? '✓ Enabled' : '✕ Disabled'}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Renew button handlers
  content.querySelectorAll('.renew-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Renewal process initiated!', 'success');
      btn.textContent = '✓ Processing';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    });
  });
}
